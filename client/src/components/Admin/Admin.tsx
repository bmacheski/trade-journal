import React from 'react'
import {
  getSetups,
  deleteSetup,
  createSetup,
  updateSetup,
  Setup,
} from '../../api/setups'
import MaterialTable, { Query } from 'material-table'
import { Grid, Card, CardContent, CircularProgress } from '@material-ui/core'
import { getPairs } from '../../api/pairs'
import { getPlatforms } from '../../api/platforms'
import { getTags } from '../../api/tags'
import { buildAsyncRows } from '../../utils/asyncPagination'

function Admin() {
  const [setups, setSetups] = React.useState<Setup[]>([])
  const [pairs, setPairs] = React.useState<any[]>([])
  const [platforms, setPlatforms] = React.useState<any[]>([])
  const [tags, setTags] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  function loadSetups() {
    getSetups().then((res) => setSetups(res))
  }

  function loadPairs() {
    getPairs().then((res) => setPairs(res))
  }

  function loadExchanges() {
    getPlatforms().then((res) => setPlatforms(res))
  }

  function loadTags() {
    getTags().then((res) => setTags(res))
  }

  React.useEffect(() => {
    async function initialize() {
      try {
        setLoading(true)
        await Promise.all([
          loadSetups(),
          loadPairs(),
          loadExchanges(),
          loadTags(),
        ])
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [])

  if (loading) return <CircularProgress />

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <MaterialTable
                title="Pairs"
                columns={[
                  {
                    title: 'Name',
                    field: 'name',
                  },
                ]}
                data={(query: Query<object>): any =>
                  buildAsyncRows(query, getPairs)
                }
                options={{
                  selection: true,
                  search: false,
                }}
                editable={{
                  onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          /* const data = this.state.data;
                            data.push(newData);
                            this.setState({ data }, () => resolve()); */
                        }
                        resolve()
                      }, 1000)
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          /* const data = this.state.data;
                              const index = data.indexOf(oldData);
                              data[index] = newData;                
                              this.setState({ data }, () => resolve()); */
                        }
                        resolve()
                      }, 1000)
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          /* let data = this.state.data;
                              const index = data.indexOf(oldData);
                              data.splice(index, 1);
                              this.setState({ data }, () => resolve()); */
                        }
                        resolve()
                      }, 1000)
                    }),
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <MaterialTable
                title="Setups"
                columns={[{ title: 'Name', field: 'name' }]}
                data={setups}
                options={{
                  selection: true,
                  search: false,
                }}
                editable={{
                  onRowAdd: (newData) => createSetup(newData).then(loadSetups),
                  onRowUpdate: (newData, oldData) =>
                    updateSetup(newData.id, {
                      name: newData.name,
                    }).then(loadSetups),
                  onRowDelete: (oldData) =>
                    deleteSetup(oldData.id).then(loadSetups),
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <MaterialTable
                title="Exchanges"
                columns={[{ title: 'Name', field: 'name' }]}
                data={platforms}
                options={{
                  selection: true,
                  search: false,
                }}
                editable={{
                  onRowAdd: (newData) => createSetup(newData).then(loadSetups),
                  onRowUpdate: (newData, oldData) =>
                    updateSetup(newData.id, {
                      name: newData.name,
                    }).then(loadSetups),
                  onRowDelete: (oldData) =>
                    deleteSetup(oldData.id).then(loadSetups),
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <MaterialTable
                title="Tags"
                columns={[{ title: 'Name', field: 'name' }]}
                data={tags}
                options={{
                  selection: true,
                  search: false,
                }}
                editable={{
                  onRowAdd: (newData) => createSetup(newData).then(loadSetups),
                  onRowUpdate: (newData, oldData) =>
                    updateSetup(newData.id, {
                      name: newData.name,
                    }).then(loadSetups),
                  onRowDelete: (oldData) =>
                    deleteSetup(oldData.id).then(loadSetups),
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Admin

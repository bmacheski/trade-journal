import React from 'react'
import { getSetups, deleteSetup, createSetup, updateSetup } from '../api/setups'
import MaterialTable from 'material-table'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import { getPairs } from '../api/pairs'

function Admin() {
  const [setups, setSetups] = React.useState<any[]>([])
  const [pairs, setPairs] = React.useState<any[]>([])

  function loadSetups() {
    getSetups().then((res) => {
      setSetups(res)
    })
  }

  function loadPairs() {
    getPairs().then((res) => {
      setPairs(res)
    })
  }

  React.useEffect(() => {
    loadSetups()
    loadPairs()
  }, [])

  return (
    <>
      <Typography variant="h6" noWrap>
        Admin
      </Typography>
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
                  { title: 'Base Pair', field: 'base_pair' },
                ]}
                data={pairs}
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
      </Grid>
    </>
  )
}

export default Admin

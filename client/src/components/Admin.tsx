import React from 'react'
import {
  getSetups,
  deleteSetup,
  createSetup,
  updateSetup,
  Setup,
} from '../api/setups'
import MaterialTable from 'material-table'
import { Grid } from '@material-ui/core'
import { getPairs, createPair, updatePair, deletePair } from '../api/pairs'
import {
  getPlatforms,
  createPlatform,
  updatePlatform,
  deletePlatform,
} from '../api/platforms'
import { getTags, updateTag, createTag, deleteTag } from '../api/tags'

function Admin() {
  const [setups, setSetups] = React.useState<Setup[]>([])
  const [pairs, setPairs] = React.useState<any[]>([])
  const [platforms, setPlatforms] = React.useState<any[]>([])
  const [tags, setTags] = React.useState<any[]>([])

  function loadSetups() {
    getSetups().then((res) => setSetups(res))
  }

  function loadPairs() {
    getPairs().then(({ data }) => setPairs(data))
  }

  function loadExchanges() {
    getPlatforms().then((res) => setPlatforms(res))
  }

  function loadTags() {
    getTags().then((res) => setTags(res))
  }

  React.useEffect(() => {
    async function initialize() {
      Promise.all([loadSetups(), loadPairs(), loadExchanges(), loadTags()])
    }

    initialize()
  }, [])

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <MaterialTable
            title="Pairs"
            columns={[
              {
                title: 'Name',
                field: 'name',
              },
            ]}
            data={pairs}
            options={{
              selection: true,
              search: false,
            }}
            editable={{
              onRowAdd: (newData) => createPair(newData).then(loadPairs),
              onRowUpdate: (newData: any) =>
                updatePair(newData.id, {
                  name: newData.name,
                }).then(loadPairs),
              onRowDelete: (oldData: any) =>
                deletePair(oldData.id).then(loadPairs),
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
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
              onRowUpdate: (newData) =>
                updateSetup(newData.id, {
                  name: newData.name,
                }).then(loadSetups),
              onRowDelete: (oldData) =>
                deleteSetup(oldData.id).then(loadSetups),
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <MaterialTable
            title="Exchanges"
            columns={[{ title: 'Name', field: 'name' }]}
            data={platforms}
            options={{
              selection: true,
              search: false,
            }}
            editable={{
              onRowAdd: (newData) =>
                createPlatform(newData).then(loadExchanges),
              onRowUpdate: (newData) =>
                updatePlatform(newData.id, {
                  name: newData.name,
                }).then(loadExchanges),
              onRowDelete: (oldData) =>
                deletePlatform(oldData.id).then(loadExchanges),
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <MaterialTable
            title="Tags"
            columns={[{ title: 'Name', field: 'name' }]}
            data={tags}
            options={{
              selection: true,
              search: false,
            }}
            editable={{
              onRowAdd: (newData) => createTag(newData).then(loadTags),
              onRowUpdate: (newData) =>
                updateTag(newData.id, {
                  name: newData.name,
                }).then(loadTags),
              onRowDelete: (oldData) => deleteTag(oldData.id).then(loadTags),
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Admin

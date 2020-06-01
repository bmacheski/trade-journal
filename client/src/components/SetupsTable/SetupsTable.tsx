import React from 'react'
import MaterialTable from 'material-table'
import {
  getSetups,
  createSetup,
  updateSetup,
  deleteSetup,
} from '../../api/setups'

interface SetupsTableProps {
  editable: boolean
}

function SetupsTable({ editable }: SetupsTableProps) {
  const [setups, setSetups] = React.useState<any[]>([])

  function loadSetups() {
    getSetups().then((res) => setSetups(res))
  }

  React.useEffect(() => {
    loadSetups()
  }, [])

  return (
    <div>
      <MaterialTable
        title="Setups"
        columns={[
          {
            field: 'name',
            title: 'Setup Name',
            render: (val) => (
              <div style={{ textTransform: 'capitalize' }}>{val.name}</div>
            ),
          },
          {
            field: 'win_count',
            title: 'Win Count',
          },
          {
            field: 'loss_count',
            title: 'Loss Count',
          },
        ]}
        data={setups}
        options={{
          selection: true,
          search: false,
        }}
        editable={{
          isEditable: () => editable,
          onRowAdd: (newData) => createSetup(newData).then(loadSetups),
          onRowUpdate: (newData, oldData) =>
            updateSetup(newData.id, {
              name: newData.name,
            }).then(loadSetups),
          onRowDelete: (oldData) => deleteSetup(oldData.id).then(loadSetups),
        }}
      />
    </div>
  )
}

export default SetupsTable

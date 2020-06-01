import React from 'react'
import MaterialTable from 'material-table'
import { createSetup, updateSetup, deleteSetup } from '../../api/setups'
import { getTags } from '../../api/tags'

interface TagsTableProps {
  editable: boolean
}

function TagsTable({ editable }: TagsTableProps) {
  const [tags, setTags] = React.useState<any[]>([])

  function loadTags() {
    getTags().then((res) => setTags(res))
  }

  React.useEffect(() => {
    loadTags()
  }, [])

  return (
    <div>
      <MaterialTable
        title="Tags"
        columns={[{ title: 'Name', field: 'name' }]}
        data={tags}
        options={{
          selection: true,
          search: false,
        }}
        editable={{
          isEditable: () => editable,
          onRowAdd: (newData) => createSetup(newData).then(loadTags),
          onRowUpdate: (newData, oldData) =>
            updateSetup(newData.id, {
              name: newData.name,
            }).then(loadTags),
          onRowDelete: (oldData) => deleteSetup(oldData.id).then(loadTags),
        }}
      />
    </div>
  )
}

export default TagsTable

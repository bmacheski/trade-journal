import React from 'react'
import MaterialTable from 'material-table'
import { getSetupMetrics } from '../../api/setups'

function SetupReport() {
  return (
    <MaterialTable
      title=""
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
      data={(query) =>
        new Promise((resolve, reject) => {
          getSetupMetrics().then((res) => {
            resolve({
              data: res,
              page: 0,
              totalCount: 3,
            })
          })
        })
      }
      options={{
        search: false,
      }}
    />
  )
}

export default SetupReport

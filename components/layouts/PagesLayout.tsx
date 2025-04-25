'use client'
import { $showQuickViewModal, $showSizeTable } from '@/context/modals/state'
import Layout from './Layout'
import { useUnit } from 'effector-react'
import { closeQuickViewModal } from '@/context/modals'
import {
  closeSizeTableByCheck,
  removeOverflowHiddenFromBody,
} from '@/lib/utils/common'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($showQuickViewModal)
  const showSizeTable = useUnit($showSizeTable)

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal)

  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`}
          onClick={handleCloseQuickViewModal}
        />
        <div
          className={`size-table-overlay ${
            showSizeTable ? 'overlay-active' : ''
          }`}
          onClick={handleCloseSizeTable}
        />
      </body>
    </html>
  )
}

export default PagesLayout

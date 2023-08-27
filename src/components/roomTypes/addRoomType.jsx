import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'




export default function AddInstitute({ open, setOpen, roomTypeSchema, setRoomTypeSchema, submitHandler }) {



  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                <div className="w-96  border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Add Room type Information</h2>


                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Room Type
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="cluster_name"
                          id="cluster_name"
                          value={roomTypeSchema.name} // Make sure to bind the input value to the city_name property
                          onChange={(e) => setRoomTypeSchema({ ...roomTypeSchema, name: e.target.value })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Beds Per Room
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="cluster_name"
                          id="cluster_name"
                          value={roomTypeSchema?.beds_per_room} // Make sure to bind the input value to the city_name property
                          onChange={(e) => setRoomTypeSchema({ ...roomTypeSchema, beds_per_room: e.target.value })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <div className="p-1 ">
                        <input
                          type="checkbox"
                          checked={roomTypeSchema.is_active} // Make sure to bind the input value to the city_name property
                          onChange={(e) => setRoomTypeSchema({ ...roomTypeSchema, is_active: e.target.checked })}
                        />
                        <span className="text-md ml-2 text-gray-9 00">
                          - Is Active{" "}
                        </span>
                      </div>
                    </div>









                  </div>
                  <button
                    type="button"
                    onClick={() => submitHandler()}
                    className="rounded-full mt-8 bg-orange-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

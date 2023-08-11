import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CrmService from '../../services/crmServices'
import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function AddDirectService({ open, setOpen, directServiceSchema, setDirectServiceSchema, submitHandler }) {

  const [query, setQuery] = useState('')

  const [cluster, setCluster] = useState([])



  const getData = async () => {
    const res = await CrmService.getCluster()
    console.log(res?.data?.data, `getData`)
    setCluster(res?.data?.data)
  }
  const selectedCluster = cluster.find(city => city.id === directServiceSchema.cluster_id);

  const filteredCity =
    query === ''
      ? cluster
      : cluster.filter((city) => {
        return cluster.cluster_name.toLowerCase().includes(query.toLowerCase())
      })
  useEffect(() => {
    getData()
  }, [])

  const handleCityChange = (cityId) => {
    console.log(cityId,`cityIdcityId`)
    setDirectServiceSchema({ ...directServiceSchema, cluster_id: cityId });
  };
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
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Add Institute Information</h2>


                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="cluster_name"
                          id="cluster_name"
                          value={directServiceSchema.name} // Make sure to bind the input value to the city_name property
                          onChange={(e) => setDirectServiceSchema({ ...directServiceSchema, name: e.target.value })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>




                  
                    <div className="col-span-full">
                    <Combobox as="div" value={directServiceSchema.cluster_id} onChange={handleCityChange}>
                        <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Cluster</Combobox.Label>
                        <div className="relative mt-2">
                          <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(event) => setQuery(event.target.value)}
                            value={selectedCluster ? selectedCluster?.cluster_name : ''}
                            displayValue={(clusterId) => clusterId}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </Combobox.Button>

                          {filteredCity.length > 0 && (
                            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredCity.map((city) => (
                                <Combobox.Option
                                  key={city.id}
                                  value={city?.id}
                                  className={({ active }) =>
                                    classNames(
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    )
                                  }
                                >
                                  {({ active, selected }) => (
                                    <>
                                      <span className={classNames('block truncate', selected && 'font-semibold')}>{city?.cluster_name}</span>

                                      {selected && (
                                        <span
                                          className={classNames(
                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                            active ? 'text-white' : 'text-indigo-600'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}
                        </div>
                      </Combobox>
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

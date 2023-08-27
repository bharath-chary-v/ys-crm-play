
import { useEffect, useState } from "react"
import CrmService from "../../services/crmServices"
import AddState from "./addVendor"
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Fuse from "fuse.js";
import Pagination from "../pagination";


export default function VendorDashBoard() {
    const [vendor, setVendor] = useState([])
    const [vendorFilter, setVendorFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [open, setOpen] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [vendorSchema, setVendorSchema] = useState({
        id: "",
            name: "",
            code: "",
            gstin: "",
            is_deleted: false,
            is_active: false,
            meta: {}
    })
    let recordsPerPage = 10
    const submitHandler = async () => {
        if (!isUpdating) {
            console.log(vendorSchema,`vendorSchema`)
            await CrmService.addVendor(vendorSchema).then((response) => {
            console.log(response,`vendorSchemaresponse`)
                toast.success(response?.data?.status);
                setVendorSchema("");
                getData();
                setOpen(false)
            }).catch((err) => {
                const message = `Error Adding City`;
                toast.error(message);
            });
        } else {
            await CrmService.updateVendor(vendorSchema).then((response) => {
                console.log()
                toast.success(response?.data?.status);
                setVendorSchema("");
                getData();
                setOpen(false)
            }).catch((err) => {
                const message = `Error Adding City`;
                toast.error(message);
            });
            setIsUpdating(false)
        }
        getData();
        setCurrentPage(1)
    }
    const editHandler = async (res) => {
        setVendorSchema({
            ...vendorSchema,
            id: res?.id,
            name: res?.name,
            code: res?.code,
            gstin: res?.gstin,
            is_active: res?.is_active,
        })
        setOpen(true)
        setIsUpdating(true)

    }
    const addStateHandler = () => {
        setOpen(true)
        setVendorSchema({
            id: "",
            name: "",
            code: "",
            gstin: "",
            is_active: false,
            is_deleted: false,
            meta: {}
        })
    }
    const searchFilter = (e) => {
        if (e.target.value.length >= 3) {
            const usingFuse = new Fuse(vendorFilter, {
                keys: ["vendor_name", "vendor"],
            });
            let result = usingFuse.search(`^${e.target.value}`).map((search) => search.item);

            setVendor(result)
        } else {
            setVendor(vendorFilter)
        }

    };
    const deleteHandler = async (data) => {
        let vendorSchema = {
            id: data?.id,
            is_deleted: true
        }
        await CrmService.updateVendor(vendorSchema).then((response) => {
            console.log()
            toast.success(response?.data?.status);
            setVendorSchema("");
            getData();
            setOpen(false)
        }).catch((err) => {
            const message = `Error Adding City`;
            toast.error(message);
        });
        setIsUpdating(false)
    }

    const getData = async () => {
        const res = await CrmService.getVendors()
        console.log(res?.data?.data, `getVendors`)
        setVendor(res?.data?.data)
        setVendorFilter(res?.data?.data)
        setTotalRecords(res?.data?.data?.length);

    }
    useEffect(() => {
        getData()
        setVendorSchema({
            id: "",
            name: "",
            code: "",
            gstin: "",
            is_active: false,
            is_deleted: false,
            meta: {}
        })
    }, [])


    return (
        <>
            <div className="pt-2 px-4 sm:px-3 lg:px-8">
                <div class="sm:flex gap-4">
                    <div class="sm:flex mr-12">
                        <p class="text-3xl font-semibold text-orange-500">
                            Vendors
                        </p>
                    </div>
                    <div class="sm:flex-auto">
                        <div class="relative mt-2 ml-12 flex items-center">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search"
                                onChange={(e) => searchFilter(e)}
                                class=" w-96 relative rounded-md border-0 py-1.5 pr-14 pl-10 text-orange-900 ring-1 ring-inset ring-gray-300 placeholder-orange-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 18l6-6M10 6l6 6"
                                    ></path>
                                </svg>
                            </div>
                        </div>




                    </div>


                    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={() => addStateHandler()}
                            className=" rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Add Vendor
                        </button>
                    </div>
                </div>


                <div className="flow-root">
                    <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className=" min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            S. No
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            vendor Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            vendor Type
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Payment Duration
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                           Mobile No.
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            is Active
                                        </th>
                                       
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {vendor?.map((res, idx) => (
                                        <tr key={res?.id}>
                                            <td className="whitespace-nowrap text-left  pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {idx + 1}
                                            </td>
                                            <td className="whitespace-nowrap text-left  pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {res?.vendor_name}
                                            </td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.vendor_type}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.payment_duration}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.mobile_number}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.is_active ? "Yes": "No"}</td>


                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                                                <span className="p-2">
                                                    <button onClick={() => editHandler(res)} className="text-orange-600 hover:text-orange-900">
                                                        Edit<span className="sr-only"> {res?.city_name}</span>
                                                    </button>
                                                </span>
                                                <span className="p-2">
                                                    <button
                                                        onClick={() => deleteHandler(res)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#dc5709" }} />
                                                    </button>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalRecords / recordsPerPage)}
                onPageChange={setCurrentPage}
            />
            <AddState
                open={open}
                setOpen={setOpen}
                vendorSchema={vendorSchema}
                setVendorSchema={setVendorSchema}
                submitHandler={submitHandler}
            />
        </>

    )
}

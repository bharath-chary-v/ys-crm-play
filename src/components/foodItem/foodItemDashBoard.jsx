
import { useEffect, useState } from "react"
import FoodService from "../../services/foodErpService"
import AddInstitute from "./addItem"
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Fuse from "fuse.js";
import Pagination from "../pagination";

export default function FoodItemDashBoard() {
    let recordsPerPage = 10

    const [foodItem, setFoodItem] = useState([])
    const [foodItemFilter, setFoodItemFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [open, setOpen] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [foodItemSchema, setFoodItemSchema] = useState({
        id: "",
        food_name: "",
        food_description: "",
        food_category_id: 0,
        is_veg: false,
        minimum_order_qty: 0,
        maximum_order_qty: 0,
        base_amount: 0.00,
        service_charges: 0,
        tax_value_type: "",
        tax_value: 0,
        is_active: false,
        is_deleted: false,
        image_url: ""
    })


    const submitHandler = async () => {
        if (!isUpdating) {
            await FoodService.addFoodItem(foodItemSchema).then((response) => {
                toast.success(response?.data?.status);
                setFoodItemSchema("");
                getData();
                setOpen(false)
            }).catch((err) => {
                const message = `Error Adding City`;
                toast.error(message);
            });
        } else {
            console.log(foodItemSchema, `foodItemSchema`)
            await FoodService.updateFoodCategory(foodItemSchema).then((response) => {
                console.log()
                toast.success(response?.data?.status);
                setFoodItemSchema("");
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
        console.log(res, `12342`)
        setFoodItemSchema({
            ...foodItemSchema,
            id: res?.id,
            food_name: res?.food_name,
            food_description: res?.food_description,
            food_category_id: res?.food_category_id,
            is_veg: res?.is_veg,
            minimum_order_qty: res?.minimum_order_qty,
            maximum_order_qty: res?.maximum_order_qty,
            base_amount: res?.base_amount,
            service_charges: res?.service_charges,
            tax_value_type: res?.tax_value_type,
            tax_value: res?.tax_value,
            is_active: res?.is_active,
            is_deleted: res?.is_deleted,
            image_url: res?.image_url

        })
        setOpen(true)
        setIsUpdating(true)

    }
    const searchFilter = (e) => {
        if (e.target.value.length >= 3) {
            const usingFuse = new Fuse(foodItemFilter, {
                keys: ["city_name", "state"],
            });
            let result = usingFuse.search(`^${e.target.value}`).map((search) => search.item);

            setFoodItem(result)
        } else {
            setFoodItem(foodItemFilter)
        }

    };
    const addInstituteHandler = () => {

        setOpen(true)
        setFoodItemSchema({
            id: "",
            food_name: "",
            food_description: "",
            food_category_id: 0,
            is_veg: false,
            minimum_order_qty: 0,
            maximum_order_qty: 0,
            base_amount: 0.00,
            service_charges: 0,
            tax_value_type: "",
            tax_value: 0,
            is_active: false,
            is_deleted: false,
            image_url: ""

        })
    }
    const deleteHandler = async (data) => {
        await FoodService.updateFoodCategory(foodItemSchema).then((response) => {
            console.log()
            toast.success(response?.data?.status);
            setFoodItemSchema("");
            getData();
            setOpen(false)
        }).catch((err) => {
            const message = `Error Adding City`;
            toast.error(message);
        });
        setIsUpdating(false)
    }

    const getData = async () => {
        const res = await FoodService?.getFoodItems()
        console.log(res?.data?.data, `getFoodItems`)
        setFoodItem(res?.data?.data)
        setFoodItemFilter(res?.data?.data)
        setTotalRecords(res?.data?.data?.length);

    }
    useEffect(() => {
        getData()
        setFoodItemSchema({
            id: "",
        food_name: "",
        food_description: "",
        food_category_id: 0,
        is_veg: false,
        minimum_order_qty: 0,
        maximum_order_qty: 0,
        base_amount: 0.00,
        service_charges: 0,
        tax_value_type: "",
        tax_value: 0,
        is_active: false,
        is_deleted: false,
        image_url: ""
        })
    }, [])


    return (
        <>
            <div className="pt-2 px-4 sm:px-6 lg:px-8">
                <div class="sm:flex gap-4">
                    <div class="sm:flex mr-12">
                        <p class="text-3xl font-semibold text-orange-500">
                            Food Items
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
                            onClick={() => addInstituteHandler()}
                            className=" rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Add Food Item
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
                                            Food Name
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Category
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Description
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Base Amount
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Service Charges
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Image
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Acitive
                                        </th>

                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {foodItem?.map((res, idx) => (
                                        <tr key={res?.id}>
                                            <td className="whitespace-nowrap text-left  pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {idx + 1}
                                            </td>
                                            <td className="whitespace-nowrap text-left  pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {res?.food_name}
                                            </td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.food_category?.name}</td>
                                            <td className="whitespace-normal text-left px-3 py-4 text-sm text-gray-500">{res?.food_description}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.base_amount}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.service_charges}</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.is_active }</td>
                                            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{res?.is_active ? "Yes" : "No"}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                                                <span className="p-2">
                                                    <button onClick={() => editHandler(res)} className="text-orange-600 hover:text-orange-900">
                                                        Edit<span className="sr-only"> {res?.city_name}</span>
                                                    </button>
                                                </span>
                                                <span className="p-2">
                                                    <button
                                                        onClick={() => deleteHandler()}
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
            <AddInstitute
                open={open}
                setOpen={setOpen}
                foodItemSchema={foodItemSchema}
                setFoodItemSchema={setFoodItemSchema}
                submitHandler={submitHandler}
            />
        </>

    )
}

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    //get cat
    const getCategories = async () => {
        try {
            const { data } = await axios.get("http://13.60.163.196:8080/api/v1/category/get-category");
            setCategories(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return categories;
}

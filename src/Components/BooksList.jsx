import axios from "axios";
import { useEffect, useState } from "react";

export const BooksList = () => {
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading status

    const ApiUrl = "https://676abacb863eaa5ac0df6fd1.mockapi.io/Books";

    useEffect(() => {
        const getBookList = async () => {
            try {
                const res = await axios.get(ApiUrl);
                setBookData(res.data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.log(error);
                setLoading(false); // Set loading to false if there's an error
            }
        };

        getBookList();
    }, []);

    return (
        <>
            {/* Use the loader class from the CSS file */}
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <table align="center" border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookData && bookData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.Book_Name}</td>
                                        <td>{item.Author_Name}</td>
                                        <td>{item.Price}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            )}
        </>
    );
};

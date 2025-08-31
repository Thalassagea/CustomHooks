import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data, isLoading, error, fetchData } = useFetch()



    useEffect(() => {
      fetchData(url, 'GET')
 
    }, [])
    

    return (
        <>
            <h2>Lista de usuarios:</h2>

            {isLoading && <h4>Cargando...</h4>}
            {error && <h4>Ocurrió un error</h4>}

            {!isLoading && !error && Array.isArray(data) && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router";

const Header = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <span className="navbar-brand">Movies App</span>
            <form className="d-flex" onSubmit={submit}>
                <input className="form-control me-2" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search movie..."/>
                <button className="btn btn-warning">Search</button>
            </form>
        </nav>
    );
};

export default Header;
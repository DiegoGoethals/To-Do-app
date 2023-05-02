import "./Breadcrumbs.css";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();

    let currentLink = "";
    const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "")
    .map((crumb) => {
        currentLink += `/${crumb}`;

        return(
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb.replaceAll("%20", " ")}</Link>
            </div>
        );
    });
    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}

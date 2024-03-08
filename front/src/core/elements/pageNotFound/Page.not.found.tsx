import pageNotFound from '../../assets/page_not_found.png'

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={pageNotFound} alt="Page-not-found" className={"h-full object-cover"}/>
            <div className={"absolute top-0 left-0 w-full h-full grid grid-cols-3"}>
                <div className={"backdrop-saturate-50"}></div>
                <div></div>
                <div className={"backdrop-saturate-50"}/>
            </div>
        </div>
    );
};
export default PageNotFound;

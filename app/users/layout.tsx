

export default function UserLayout({children}: {children: React.ReactNode}){
    return(
        <div>
            <h2 style={{ color: "blue"}}>
                This is a user route
            </h2>
            {children}
        </div>

    );
}
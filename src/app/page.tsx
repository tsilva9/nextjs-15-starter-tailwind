import BasicScene from "@/three/basic-scene";

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    return (
        <div className="w-[100vw] h-[100vh]">
            <BasicScene />
        </div>
    );
};

export default Page;

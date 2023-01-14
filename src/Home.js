import useFetch from "./useFetch";
 
const Home = () => {

//const { data, isPending, Error} = useFetch('https://api.unsplash.com/search/photos?query=pizza&client_id=CZZtfrAj6IzfukN1cBL4AvfDwDO26pgy-EEUGMzJNl8&per_page=200');
//console.log(data);
    return ( 
        <div className="w-screen h-fit py-20 md:flex md:items-center md:justify-between">
            <h1 className="text-redish text-5xl font-bold text-center md:my-0 md:mx-auto">Food & Recipes</h1>


            <img src={img2} alt="A food" className="h-auto w-[250px] my-20 md:my-0 mx-auto" />


            <div className="w-full flex items-end justify-center flex-col md:w-[30%]">
                
                <div className="w-[80vw] md:w-[90%] md:justify-between flex items-center justify-around bg-whiteish/10 shadow-sm backdrop:blur-sm p-3 rounded-l-xl">
                    <img src={img1} alt='Another food' className="h-auto w-[100px]" />
                    <div className="p-3 mr-5">
                        <h2 className="text-xl font-bold">Food Name</h2>
                        <p>This is a dummy text</p>
                    </div>
                </div>

                <div className="w-[80vw] md:w-[90%] md:justify-between flex items-center justify-around bg-whiteish/10 shadow-sm backdrop:blur-sm p-3 rounded-l-xl my-5">
                    <img src={img3} alt='Another food' className="h-auto w-[100px]" />
                    <div className="p-3 mr-5">
                        <h2 className="text-xl font-bold">Food Name</h2>
                        <p>This is a dummy text</p>
                    </div>
                </div>

                <div className="w-[80vw] md:w-[90%] md:justify-between flex items-center justify-around bg-whiteish/10 shadow-sm backdrop:blur-sm p-3 rounded-l-xl">
                    <img src={img4} alt='Another food' className="h-auto w-[100px]" />
                    <div className="p-3 mr-5">
                        <h2 className="text-xl font-bold">Food Name</h2>
                        <p>This is a dummy text</p>
                    </div>
                </div>
            </div>


        <div className="w-screen bg-darkish px-5 grid grid-cols-4 grid-row-3 gap-2 place-items-center h-fit">
            
        </div>



        </div>
    );
};

let img1 = './burger.jpg';
let img2 = './pizza.jpg';
let img3 = './noodles.jpg';
let img4 = './cookies.jpg';


export default Home;
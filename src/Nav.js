const Nav = () => {
    return ( 
        <div className='w-screen h-[10vh] relative flex items-center justify-between bg-whiteish p-5 z-10' id='nav'>
        <h1 className='font-bold z-10'>LOGO</h1>
        
        <div className='absolute top-[0] left-0 h-[10vh] w-screen z-[3] sm:relative sm:z-10 sm:w-auto bg-whiteish' id='nav_list'>
        <ul className='items-center justify-around w-full h-full bg-white hidden sm:flex ' id='list1'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'className='text-yellow font-bold sm:mx-10 md:mx-20'>Menu</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
        <i className='bx bxs-down-arrow absolute left-[50%] -translate-x-[50%] text-[25px] -bottom-[20px] sm:hidden z-20' id='Navicon' onClick={openNav0}></i>
        </div>

        <div className='flex bg-yellow-50 items-center justify-center p-2 z-10'>
          <input type="text" name="Search" placeholder='Search food recipe' className='text-xs py-2 px-4 sm:px-6 md:px-10 bg-whiteish border-b-[1px] outline-none font-bold' />
          <i className='bx bx-search text-xs sm:text-xl cursor-pointer'></i>
        </div>
        
      </div>
    );
}

let nav_list = document.getElementById('nav_list');
let list1 = document.getElementById('list1');
let Navicon = document.getElementById('Navicon');
//const styles = window.getComputedStyle(nav_list);
 function openNav0(){
  nav_list.classList.toggle('openNavList');
  list1.classList.toggle('openList');
  Navicon.classList.toggle('bxs-up-arrow');
};
 
export default Nav;
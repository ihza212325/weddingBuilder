const Header = () => {
  return (
    // <div className="relative h-20">
    <div className="w-full h-20 z-50 fixed px-16 py-4 flex flex-row justify-around items-center bg-base-100 bg-opacity-30">
      <div>
        <p className="text-black">Our Wedding</p>
      </div>
      <div className="flex flex-row gap-10">
        <button className=" hover:text-secondary">Preset/Desain</button>
        <button className=" hover:text-secondary">Portofolio</button>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="hover:text-secondary m-1">
            Lainya
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="hover:text-secondary">Menjadi Reseller</a>
            </li>
            <li>
              <a className="hover:text-secondary">Digital Guestbook</a>
            </li>
            <li>
              <a className="hover:text-secondary">Undangan Lainya</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row">
        <button class="btn btn-primary">Button</button>
        {/* <p>Keluar</p> */}
      </div>
    </div>
    // </div>
  );
};

export default Header;

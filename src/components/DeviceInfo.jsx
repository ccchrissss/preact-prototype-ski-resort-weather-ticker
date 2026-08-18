import "../style.css"

// let colorado = {
//   stateName: 'Colorado',
//   resorts: ['vail', 'breckenridge', 'keystone']
// }

function SkiResortsPerState( props ) {
  
  return (
    <>
      {/* <p>{msg}</p> */}
      <p>{props.stateName}</p>
      <p>{props.resorts[1]}</p>
      {/* <p>{props.resort}</p> */}
      {/* <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Colorado
          </li>

          <li className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                alt="Tailwind CSS list item"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div>
              <div>Vail</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                alt="Tailwind CSS list item"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />
            </div>
            <div>
              <div>Keystone</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Bears of a fever
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                alt="Tailwind CSS list item"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
            </div>
            <div>
              <div>Breckenridge</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Cappuccino
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul> */}
    </>
  );
}


export function DeviceInfo(props) {

  const colorado = {
    stateName: "Colorado",
    resorts: ["vail", "a basin", "breckenridge", "keystone"],
  };

  

  const listItems = colorado.resorts.map(resortName => 
    <li>{resortName}</li>
  )

  // return <ul>{listItems}</ul>;

  return (
    <>
      <section class="m-4">
        <div class="mb-8">
          <h4 class="font-bold">Your Device</h4>
          <h5>{props.deviceID}</h5>
        </div>

        <h4>Choose Your Ski Resorts</h4>
        <ul>{listItems}</ul>
        {/* <SkiResortsPerState {...colorado} /> */}
        
      </section>
    </>
  );
}
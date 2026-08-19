import "../style.css"

// let colorado = {
//   stateName: 'Colorado',
//   resorts: ['vail', 'breckenridge', 'keystone']
// }

function SkiResortsPerState({ resortObj }) {
  


  const newListItems = resortObj.resorts.map(
    (skiResort) => (
      <li className="list-row">
        <div>
          {/* <img
            className="size-10 rounded-box"
            alt="Tailwind CSS list item"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          /> */}
          <img
            className="size-10 rounded-box"
            alt="Tailwind CSS list item"
            src={`src/assets/alphabet-icons/letter-${skiResort.name.charAt(0)}-svgrepo-com.svg`}
          />
        </div>
        <div>
          <div>{skiResort.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {/* add some subtitle info here */}
          </div>
        </div>
        <div class="tooltip" data-tip="add to your faves">
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
        </div>

        <button>
          <input type="checkbox" checked="checked" class="checkbox" />
        </button>
      </li>
    ),
    // this one def works
    // (skiResortNombre) => <li>{skiResortNombre}</li>
    // this one also works too
    // <SkiResortsPerState resortName={resortName} />
  );

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          {resortObj.stateName}
        </li>
        {newListItems}
      </ul>
    </>
  );
}

export function DeviceInfo(props) {

  const colorado = {
    stateName: "Colorado",
    resorts: [{
        id: 0,
        name: "Vail"
      }, {
        id: 1,
        name: "A Basin"
      }, {
        id: 2,
        name: "Breckenridge"
      }, {
        id: 3,
        name: "Keystone"
    }]
  };

  const california = {
    stateName: "California",
    resorts: [
      {
        id: 0,
        name: "Mammoth",
      },
      {
        id: 1,
        name: "Tahoe",
      },
      {
        id: 2,
        name: "Heavenly",
      },
    ],
  };

  const pa = {
    stateName: "Pennsylvania",
    resorts: [
      {
        id: 0,
        name: "Bear Creek",
      },
      {
        id: 1,
        name: "Big Boulder",
      },
      {
        id: 2,
        name: "Camelback",
      },
      {
        id: 3,
        name: "Blue Mountain",
      },
    ],
  };

  return (
    <>
      <section class="m-4">
        <div class="mb-8">
          <h4 class="font-bold">Your Device</h4>
          <h5>{props.deviceID}</h5>
        </div>

        <h4>Choose Your Ski Resorts</h4>
        <SkiResortsPerState resortObj={colorado} />
        <SkiResortsPerState resortObj={california} />
        <SkiResortsPerState resortObj={pa} />
      </section>
    </>
  );
}



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
        </ul> */}
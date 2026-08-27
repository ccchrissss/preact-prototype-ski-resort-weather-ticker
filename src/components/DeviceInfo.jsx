import "../style.css"
import { useState } from 'preact/hooks'

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
          <input type="checkbox" checked={skiResort.checked} class="checkbox" />
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
      <ul className="list bg-base-100 rounded-box shadow-md mb-4">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide font-semibold">
          {resortObj.stateName}
        </li>
        {newListItems}
      </ul>
    </>
  );
}

export function DeviceInfo(props) {

  const [gizmoName, setGizmoName] = useState('My_Custom_Name')

  const colorado = {
    stateName: "Colorado",
    isItChecked: true,
    resorts: [
      {
        id: 0,
        name: "Vail",
        checked: true,
      },
      {
        id: 1,
        name: "A Basin",
        checked: false,
      },
      {
        id: 2,
        name: "Breckenridge",
        checked: true,
      },
      {
        id: 3,
        name: "Keystone",
        checked: true,
      },
    ],
  };

  const california = {
    stateName: "California",
    resorts: [
      {
        id: 0,
        name: "Mammoth",
        checked: true,
      },
      {
        id: 1,
        name: "Tahoe",
        checked: false,
      },
      {
        id: 2,
        name: "Heavenly",
        checked: false,
      },
    ],
  };

  const pa = {
    stateName: "Pennsylvania",
    resorts: [
      {
        id: 0,
        name: "Bear Creek",
        checked: true,
      },
      {
        id: 1,
        name: "Big Boulder",
        checked: false,
      },
      {
        id: 2,
        name: "Camelback",
        checked: false,
      },
      {
        id: 3,
        name: "Blue Mountain",
        checked: false,
      },
    ],
  };

  function handleGizmoNameChange(e) {
    setGizmoName(e.target.value)
  }

  return (
    <>
      <section class="m-4 mt-8">
        <div class="mb-8">
          <h4 class="font-bold mb-4">Your Device - {gizmoName}</h4>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
            <input id="collapse-1-toggle" type="checkbox" className="peer" />
            <label
              htmlFor="collapse-1-toggle"
              className="fixed inset-0 hidden peer-checked:block"
            ></label>
            <div className="collapse-title font-semibold">Name your gizmo</div>
            <input
              onChange={handleGizmoNameChange} value={gizmoName}
              className="collapse-content text-sm italic z-1 border border-base-300"
            />
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input id="collapse-1-toggle" type="checkbox" className="peer" />
            <label
              htmlFor="collapse-1-toggle"
              className="fixed inset-0 hidden peer-checked:block"
            ></label>
            <div className="collapse-title font-semibold">
              The Boring ID I assigned to your gizmo
            </div>
            <div className="collapse-content text-sm z-1">
              ID: {props.deviceID}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h4 class="font-bold mb-4">Choose Your Ski Resorts <span className="font-normal italic">*up to 5</span></h4>
          <SkiResortsPerState resortObj={colorado} />
          <SkiResortsPerState resortObj={california} />
          <SkiResortsPerState resortObj={pa} />
        </div>

        <div class="mb-8">
          <h4 class="font-bold mb-4">Adjust Your Powder Tracker Settings</h4>
          {/* <input type="range" min={0} max="100" value="40" className="range m-4" /> */}
          <h5>
            <span className="font-semibold">Alert Threshold 1 - </span>Snowfall
            accumulation in the past 24 hrs
          </h5>
          <div className="w-full max-w-xs m-4">
            <input
              type="range"
              min={0}
              max="100"
              value="0"
              className="range"
              step="11.11"
            />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>1"</span>
              <span>2"</span>
              <span>3"</span>
              <span>4"</span>
              <span>5"</span>
              <span>6"</span>
              <span>1'</span>
              <span>1.5'</span>
              <span>2' </span>
              <span>🤿</span>
            </div>
          </div>

          <h5>
            <span className="font-semibold">Alert Threshold 2 - </span>
            Forecasted snowfall accumulation in the next 24 hrs
          </h5>
          <div className="w-full max-w-xs m-4 mb-8">
            <input
              type="range"
              min={0}
              max="100"
              value="0"
              className="range"
              step="11.11"
            />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>1"</span>
              <span>2"</span>
              <span>3"</span>
              <span>4"</span>
              <span>5"</span>
              <span>6"</span>
              <span>1'</span>
              <span>1.5'</span>
              <span>2' </span>
              <span>🤿</span>
            </div>
          </div>

          <h5>Want an additional forecast alert?</h5>
          <div className="m-4">
            <label className="mr-2">No</label>
            <input type="checkbox" className="toggle" />
            <label className="ml-2">Yes!</label>
            {/* add state logic here to only show below when toggle is on */}
          </div>

          <h5>How many days into the future?</h5>
          <div className="w-full max-w-xs m-4">
            <input
              type="radio"
              id="daysOutChoice2"
              name="daysOut"
              className="radio mr-2"
              defaultChecked
            />
            <label for="daysOutChoice2">2</label>

            <input
              type="radio"
              id="daysOutChoice3"
              name="daysOut"
              className="radio mx-2"
            />
            <label for="daysOutChoice3">3</label>

            <input
              type="radio"
              id="daysOutChoice4"
              name="daysOut"
              className="radio mx-2"
            />
            <label for="daysOutChoice4">4</label>

            <input
              type="radio"
              id="daysOutChoice5"
              name="daysOut"
              className="radio mx-2"
            />
            <label for="daysOutChoice5">5</label>

            <input
              type="radio"
              id="daysOutChoice6"
              name="daysOut"
              className="radio mx-2"
            />
            <label for="daysOutChoice6">6</label>

            <input
              type="radio"
              id="daysOutChoice7"
              name="daysOut"
              className="radio mx-2"
            />
            <label for="daysOutChoice7">7</label>
          </div>

          <h5>
            <span className="font-semibold">Alert Threshold 3 - </span>x-days
            snow forecast
          </h5>
          {/* add logic to insert radio btn selection value into above text variable */}
          <div className="w-full max-w-xs m-4">
            <input
              type="range"
              min={0}
              max="100"
              value="0"
              className="range"
              step="11.11"
            />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>1"</span>
              <span>2"</span>
              <span>3"</span>
              <span>4"</span>
              <span>5"</span>
              <span>6"</span>
              <span>1'</span>
              <span>1.5'</span>
              <span>2' </span>
              <span>🤿</span>
            </div>
          </div>
        </div>
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
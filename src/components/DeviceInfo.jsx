import "../style.css"
import { useState } from 'preact/hooks'

const coloradoSkiResorts = [
  { id: 0, name: "Vail", checked: true },
  { id: 1, name: "A Basin", checked: false },
  { id: 2, name: "Breckenridge", checked: true },
  { id: 3, name: "Keystone", checked: true },
];

const coloradoInitial = {
  stateName: "Colorado",
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

const californiaInitial = {
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

const paInitial = {
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

const powderTrackerPrefsInitial = {
  alerts: [
    {
      id: 0,
      name: "Alert Threshold 1",
      snowAccumValue: 6
    },
    {
      id: 1,
      name: "Alert Threshold 2",
      snowAccumValue: 12
    },
    {
      id: 2,
      name: "Alert Threshold 3",
      isActive: true,
      daysIntoFuture: 3,
      snowAccumValue: 1
    }
  ],
};


// child component
function Checkbox ({ skiResort, isChecked, checkHandler }) {
  return (
    <li key={skiResort.id} className="list-row">
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
        <p>{skiResort.name}</p>
          <div className="text-xs uppercase font-semibold opacity-60">
            {/* add some subtitle info here */}
          </div>
        </div>
        <div class="tooltip" data-tip="add to your faves">
          {/* <button onClick={clickTheHeart(skiResort.id)} className="btn btn-square btn-ghost"> */}
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

        {/* <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        /> */}
        <button className="btn">
          {/* Send Data to Parent */}
          {/* the data[0].isChecked probably needs to search the data array for an object with the property of "key" with a value of skiResort.id, and then use the provide the value of the property "isChecked" */}
          <input
            type="checkbox"
            // id={`checkbox-${skiResort.id}`}
            // checked={data[0].isChecked}
            checked={isChecked}
            onChange={checkHandler}
            className="checkbox"
            // onChange={(e) => setData(e.target.checked)}
          />
        </button>

        {/* add state to checkbox property in ski resorts obj resorts. Taht way when user checks or unchecks the box it will update the object which will be sent back to the esp32. */}
        {/* this is the og button */}
        {/* <button
          onClick={() => console.log(`${skiResort.name} checkbox clicked.`)}
        >
          <input type="checkbox" checked={skiResort.checked} class="checkbox" />
        </button> */}
    </li>
  )
}

// *****
// test child component
function Slider({ }) {

  return (
    <input
      type="range"
      min={0}
      max="100"
      value="0"
      className="range"
      step="11.11"
      onChange={() => console.log("iSlide")}
    />
  )
  
}

// *****
// parent component
function SkiResortsPerState({ initialStateName }) {

  const [skiResorts, setSkiResorts] = useState(initialStateName)

  function updateCheckStatus(id) {
    // if (skiResorts.resorts) {
    setSkiResorts((s) => ({
      ...s,
      // resorts: ['hey', 'what up']
      resorts: s.resorts.map((resort) =>
        resort.id === id ? { ...resort, checked: !resort.checked } : resort,
      ),
    }));
  }

  // console.log(data)
  // console.log(data[0])
  // console.log(data[0].id)
  // console.log(data[0].isChecked)

  // function handleClick() {
  //   sendDataToParent(data)
  // }

  // const newListItems = resortObj.resorts.map(
    // (skiResort) => (
    //   <li key={skiResort.id} className="list-row">
    //     <div>
    //       {/* <img
    //         className="size-10 rounded-box"
    //         alt="Tailwind CSS list item"
    //         src="https://img.daisyui.com/images/profile/demo/1@94.webp"
    //       /> */}
    //       <img
    //         className="size-10 rounded-box"
    //         alt="Tailwind CSS list item"
    //         src={`src/assets/alphabet-icons/letter-${skiResort.name.charAt(0)}-svgrepo-com.svg`}
    //       />
    //     </div>
    //     <div>
    //       <div>{skiResort.name}</div>
    //       <div className="text-xs uppercase font-semibold opacity-60">
    //         {/* add some subtitle info here */}
    //       </div>
    //     </div>
    //     <div class="tooltip" data-tip="add to your faves">
    //       {/* <button onClick={clickTheHeart(skiResort.id)} className="btn btn-square btn-ghost"> */}
    //       <button onClick={testClick} className="btn btn-square btn-ghost">
    //         <svg
    //           className="size-[1.2em]"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <g
    //             strokeLinejoin="round"
    //             strokeLinecap="round"
    //             strokeWidth="2"
    //             fill="none"
    //             stroke="currentColor"
    //           >
    //             <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    //           </g>
    //         </svg>
    //       </button>
    //     </div>

    //     {/* <input
    //       type="text"
    //       value={data}
    //       onChange={(e) => setData(e.target.value)}
    //     /> */}
    //     <button className="btn" onClick={handleClick}>
    //       {/* Send Data to Parent */}
    //       {/* the data[0].isChecked probably needs to search the data array for an object with the property of "key" with a value of skiResort.id, and then use the provide the value of the property "isChecked" */}
    //       <input
    //         type="checkbox"
    //         id={`checkbox-${skiResort.id}`}
    //         // checked={data[0].isChecked}
    //         checked={isChecked}
    //         onChange={checkHandler}
    //         className="checkbox"
    //         // onChange={(e) => setData(e.target.checked)}
    //       />
    //     </button>

    //     {/* add state to checkbox property in ski resorts obj resorts. Taht way when user checks or unchecks the box it will update the object which will be sent back to the esp32. */}
    //     {/* this is the og button */}
    //     {/* <button
    //       onClick={() => console.log(`${skiResort.name} checkbox clicked.`)}
    //     >
    //       <input type="checkbox" checked={skiResort.checked} class="checkbox" />
    //     </button> */}
    //   </li>
    // ),
    // this one def works
    // (skiResortNombre) => <li>{skiResortNombre}</li>
    // this one also works too
    // <SkiResortsPerState resortName={resortName} />
  // );

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md mb-4">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide font-semibold">
          {skiResorts.stateName}
        </li>
        {/* {newListItems} */}
        {skiResorts.resorts.map((resort) => (
          <Checkbox
            skiResort={resort}
            isChecked={resort.checked}
            checkHandler={() => updateCheckStatus(resort.id)}
          />
        ))}
        <p>Here's the current skiResorts state:</p>
        <pre>{JSON.stringify(skiResorts, null, 2)}</pre>
      </ul>
    </>
  );
}

// *****
// big daddy parent component
export function DeviceInfo(props) {

  const [gizmoName, setGizmoName] = useState('My_Custom_Name')
  const [powderAlertPrefs, setPowderAlertPrefs] = useState(powderTrackerPrefsInitial)
  // const [dataFromChild, setDataFromChild] = useState([])
  // const [skiResorts, setSkiResorts] = useState(coloradoSkiResorts)

  const rangeSliderCorrespondingValues = {
    // the unit for the integers (except 0) is inches. The decimals are the values for the input range slider
    0: 1,
    11.11: 2,
    22.22: 3,
    33.33: 4,
    44.44: 5,
    55.55: 6,
    66.66: 12,
    77.77: 16,
    88.88: 24,
    99.99: 36,
    1: 0,
    2: 11.11,
    3: 22.22,
    4: 33.33,
    5: 44.44,
    6: 55.55,
    12: 66.66,
    16: 77.77,
    24: 88.88,
    36: 99.99,
  };
  // console.log(rangeSliderCorrespondingValues[2])

  function updatePowderTracker(id, selectedRangeValue) {

    console.log(selectedRangeValue)

      // if (skiResorts.resorts) {
      setPowderAlertPrefs((s) => ({
        ...s,
        alerts: s.alerts.map((alertThreshold) =>
          alertThreshold.id === id ? {...alertThreshold, snowAccumValue: rangeSliderCorrespondingValues[selectedRangeValue]} : alertThreshold,
        ),
      }));
  }
  

  // function handleDataFromChild(data) {
  //   setDataFromChild(data[0].id)
  // }

  
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
              // onChange={handleGizmoNameChange} value={gizmoName}
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
              The boring ID I assigned to your gizmo
            </div>
            <div className="collapse-content text-sm z-1">
              ID: {props.deviceID}
            </div>
          </div>
        </div>

        <div class="mb-8">
          {/* <h2>Data from child: {dataFromChild[0]}</h2> */}
          <h4 class="font-bold mb-4">
            Choose Your Ski Resorts{" "}
            <span className="font-normal italic">*up to 5</span>
          </h4>
          <SkiResortsPerState initialStateName={coloradoInitial} />
          <SkiResortsPerState initialStateName={californiaInitial} />
          <SkiResortsPerState initialStateName={paInitial} />
        </div>

        <div class="mb-8">
          <h4 class="font-bold mb-4">Adjust Your Powder Tracker Settings</h4>
          <Slider />
          {/* <input type="range" min={0} max="100" value="40" className="range m-4" /> */}
          <h5>
            <span className="font-semibold">Alert Threshold 1 - </span>Snowfall
            accumulation in the past 24 hrs
          </h5>
          <div className="w-full max-w-xs m-4">
            <p>{}</p>
            <pre>{JSON.stringify(powderAlertPrefs, null, 2)}</pre>
            <input
              type="range"
              min={0}
              max="100"
              // value={
              //   rangeSliderCorrespondingValues[
              //     powderAlertPrefs.alerts[0].snowAccumValue
              //   ]
              // }

              className="range"
              step="11.11"
              onInput={(e) => updatePowderTracker(0, e.target.value)}
              // onInput={e => console.log(e.target.value)}
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
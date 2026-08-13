import "../style.css"

export function DeviceInfo(props) {

  return (
    <>
      <div class="m-4">
        <h4 class="font-bold">Your Device</h4>
        <h5>{props.deviceID}</h5>
      </div>
    </>
  );
}
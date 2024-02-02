import Countdown from 'react-countdown';


const Completionist = () => <span>1h is over</span>;

function CountdownRenderer() {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-center">
        <Countdown
        date={Date.now() + 3600000}
        renderer={renderer}
      />
      </h2>
    </div>
  );
};

export default CountdownRenderer;
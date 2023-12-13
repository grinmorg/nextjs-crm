import clsx from "clsx";
import React from "react";

export function UIPageSpinner({ className }: { className?: string }) {

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const animationDuration = 500; // Adjust the duration as needed
    const startTime = Date.now();

    // Calculate the progress based on time
    const updateWidth = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < animationDuration) {
        const newWidth = (elapsedTime / animationDuration) * 100;
        setWidth(newWidth);
        requestAnimationFrame(updateWidth);
      } else {
        setWidth(100); // Ensure it reaches 100% when animation is done
        console.log('Время кончилось!');
      }
    };

    updateWidth();
  }, []);

  const loaderStyle = {
    width: `${width}%`, // Set the width based on the state variable
  };

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bg-violet-500 h-2",
        className,
      )}

      style={loaderStyle}
    ></div>
  );
}

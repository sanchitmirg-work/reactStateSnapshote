import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>State as a Snapshot</h1>
      <ul className="notes">
        <li>
          State variables might look like regular JavaScript variables that you
          can read and write to. However, state behaves more like a snapshot.
          Setting it does not change the state variable you already have, but
          instead triggers a re-render.
        </li>
        <li>Setting a state requests a re-render</li>
      </ul>
      <h1>Rendering takes a snapshot in time</h1>
      <ul className="notes">
        <li>
          “Rendering” means that React is calling your component, which is a
          function. The JSX you return from that function is like a snapshot of
          the UI in time. Its props, event handlers, and local variables were
          all calculated using its state at the time of the render.
        </li>
        <li>
          When React re-renders a component:
          <ol className="notes">
            <li>React calls your function again.</li>
            <li>Your function returns a new JSX snapshot.</li>
            <li>
              React then updates the screen to match the snapshot your function
              returned.
            </li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

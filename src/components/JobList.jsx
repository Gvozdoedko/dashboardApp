import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectAllPositions } from "store/positions/positionSelectors";
import { useEffect } from "react";

const JobList = () => {
    const positions = useSelector(selectAllPositions);

    useEffect(() => {
      console.log(positions);
    })
    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };

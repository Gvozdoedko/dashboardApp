import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "store/positions/positionSelectors";
import { selectFilters } from "store/filters/filterselectors";
import { useEffect } from "react";
import { addFilter } from "store/filters/filterActions";

const JobList = () => {
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) =>
        selectVisiblePositions(state, currentFilters)
    );
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(positions);
    });
    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition
                    key={item.id}
                    {...item}
                    handleAddFilter={handleAddFilter}
                />
            ))}
        </div>
    );
};

export { JobList };

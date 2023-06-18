import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CircleForm = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[-10px]">
        <FontAwesomeIcon icon={faCircle} className="text-[#5030E5]" size="1x" />
      </div>
      <div className="flex justify-between">
        <FontAwesomeIcon icon={faCircle} className="text-[#5030E5] opacity-40" size="1x" />
        <FontAwesomeIcon icon={faCircle} className="text-[#5030E5] opacity-40" size="1x" />
      </div>
    </div>
  );
};

export default CircleForm;

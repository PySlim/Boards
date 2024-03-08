import {ErrorModalPropsInterface} from "./interfaces/errorModal.props.interface.ts";

const ErrorModal = ({ showModal, errorMessage, onClose}:ErrorModalPropsInterface) => {
    if(!showModal) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-lg font-bold text-red-500">Error</h2>
                <p className="text-sm text-gray-700 mt-2">{errorMessage}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ErrorModal;
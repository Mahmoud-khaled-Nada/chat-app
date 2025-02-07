import React from "react";
import { FaPhone, FaPhoneSlash } from "react-icons/fa";

const VoiceCallModel = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Caller"
            className="w-20 h-20 rounded-full border-4 border-primary"
          />
        </div>

        {/* Caller Info */}
        <h2 className="text-lg font-semibold text-gray-900">Josephin Water</h2>
        <p className="text-sm text-gray-500">Log Angelina, California</p>

        {/* Call Controls */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="bg-primary p-3 rounded-full text-white shadow-lg hover:bg-green-600">
            <FaPhone size={20} />
          </button>
          <button className="bg-red-600 p-3 rounded-full text-white shadow-lg hover:bg-red-700">
            <FaPhoneSlash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceCallModel;

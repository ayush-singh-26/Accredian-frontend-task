import React, { useState } from "react";
import axios from "axios";
import Spinner from "./assets/loader/Spinner";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form"; // ✅ Importing useForm

const ReferEarnForm = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // ✅ Correct usage

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/referal", data);
      console.log("Referral Submitted", response.data);
      toast.success("Referral submitted successfully");
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error("Failed to submit referral");
    } finally {
      setLoading(false);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}> {/* ✅ Using handleSubmit */}
          <div className="flex">
            {/* Left Side - Referrer */}
            <div className="w-1/2 p-4 border-r">
              <h2 className="text-xl font-bold mb-4">Referrer Details</h2>
              <input {...register("referrerName", { required: true })} placeholder="Your Name" className="w-full px-3 py-2 border rounded-lg mb-2" />
              {errors.referrerName && <span className="text-red-500">Required</span>}
              
              <input {...register("referrerEmail", { required: true })} placeholder="Your Email" className="w-full px-3 py-2 border rounded-lg mb-2" />
              {errors.referrerEmail && <span className="text-red-500">Required</span>}
              
              <input {...register("referrerPhone")} placeholder="Your Phone (Optional)" className="w-full px-3 py-2 border rounded-lg mb-2" />
              
              <input {...register("referralCode")} placeholder="Referral Code (Optional)" className="w-full px-3 py-2 border rounded-lg mb-2" />
            </div>

            {/* Right Side - Referee */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">Referee Details</h2>
              <input {...register("refereeName", { required: true })} placeholder="Friend's Name" className="w-full px-3 py-2 border rounded-lg mb-2" />
              {errors.refereeName && <span className="text-red-500">Required</span>}
              
              <input {...register("refereeEmail", { required: true })} placeholder="Friend's Email" className="w-full px-3 py-2 border rounded-lg mb-2" />
              {errors.refereeEmail && <span className="text-red-500">Required</span>}
              
              <input {...register("refereePhone")} placeholder="Friend's Phone (Optional)" className="w-full px-3 py-2 border rounded-lg mb-2" />
              
              <input {...register("courseName", { required: true })} placeholder="Course Interested In" className="w-full px-3 py-2 border rounded-lg mb-2" />
              {errors.courseName && <span className="text-red-500">Required</span>}
              
              <textarea {...register("message")} placeholder="Message (Optional)" className="w-full px-3 py-2 border rounded-lg mb-2"></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              {loading ? <Spinner /> : "Submit"}
            </button>
            <button type="button" onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ReferEarnForm;

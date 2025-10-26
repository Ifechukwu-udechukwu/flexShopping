'use client'

import { Star, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@clerk/nextjs';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addRating } from '@/lib/features/rating/ratingSlice';

const RatingModal = ({ ratingModal, setRatingModal }) => {
  const { getToken } = useAuth();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async () => {
    if (rating <= 0 || rating > 5) {
      toast.error('Please select a rating between 1 and 5');
      throw new Error('Invalid rating');
    }
    if (review.trim().length < 5) {
      toast.error('Write a short review (min 5 characters)');
      throw new Error('Review too short');
    }

    try {
      const token = await getToken();

      const { data } = await axios.post(
        '/api/rating',
        {
          productId: ratingModal.productId,
          orderId: ratingModal.orderId,
          rating,
          review,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(addRating(data.rating));
      setRatingModal(null);

      return data.message; // return success message for toast.promise
    } catch (error) {
      console.error(error);
      throw new Error(error?.response?.data?.error || error.message);
    }
  };

  return (
    <div className='fixed inset-0 z-[120] flex items-center justify-center bg-black/10'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96 relative'>
        {/* Close Button */}
        <button
          onClick={() => setRatingModal(null)}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'
        >
          <XIcon size={20} />
        </button>

        {/* Header */}
        <h2 className='text-xl font-medium text-slate-600 mb-4'>Rate Product</h2>

        {/* Rating Stars */}
        <div className='flex items-center justify-center mb-4'>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`size-8 cursor-pointer ${
                rating > i ? 'text-green-400 fill-current' : 'text-gray-300'
              }`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>

        {/* Review Textarea */}
        <textarea
          className='w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400'
          placeholder='Write your review'
          rows='4'
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Submit Button */}
        <button
          onClick={() =>
            toast.promise(handleSubmit(), {
              loading: 'Submitting...',
              success: (msg) => msg || 'Review submitted successfully!',
              error: (err) => err.message || 'Failed to submit review',
            })
          }
          className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition'
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default RatingModal;

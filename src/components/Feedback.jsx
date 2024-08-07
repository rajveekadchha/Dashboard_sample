import React from "react";

const feedbacks = [
  {
    id: 1,
    name: "Jenny Wilson",
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    rating: 4,
  },
  {
    id: 2,
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Devon Lane",
    feedback:
      "Normally wings are wings, but theirs are lean, meaty and tender, and full of flavor.",
    rating: 4,
  },
];

const FeedbackList = () => {
  return (
    <div className="p-4 text-white max-h-96 h-[290px] max-sm:h-[377px]">
      <h2 className="text-xl font-bold mb-4 text-justify">
        Customer's Feedback
      </h2>
      <div className="overflow-y-auto max-h-96 max-sm:max-h-[20rem]">
        <ul>
          {feedbacks.map((feedback) => (
            <li
              key={feedback.id}
              className="mb-4 border-b border-gray-700 pb-4"
            >
              <div className="flex items-center mb-2">
                <img
                  src={`https://i.pravatar.cc/40?img=${feedback.id}`}
                  alt={feedback.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-bold">{feedback.name}</span>
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 fill-current ${
                      index < feedback.rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.91 1.122 6.545L10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-justify">{feedback.feedback}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackList;

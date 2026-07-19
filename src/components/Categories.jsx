import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  toggleAccordion,
} from "../redux/slice/categorySlice";

function Categories() {
  const dispatch = useDispatch();

  const { categories, openId } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className="max-w-5xl mx-auto py-20">
      <h2 className="text-4xl font-bold mb-8">
        Категории
      </h2>

      {categories.map((item) => (
        <div key={item.id} className="border-b py-4">
          <button
            onClick={() => dispatch(toggleAccordion(item.id))}
            className="flex justify-between w-full"
          >
            <span>{item.title}</span>
            <span>{openId === item.id ? "-" : "+"}</span>
          </button>

          {openId === item.id && (
            <div className="mt-3">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Categories;
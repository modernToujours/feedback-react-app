import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

function MainPage() {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
}

export default MainPage;

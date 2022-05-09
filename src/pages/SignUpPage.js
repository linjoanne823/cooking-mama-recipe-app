import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import SignUpModal from "../components/Modal/SignUpModal";
import SignUpForm from "../components/SignUpForm/SignUpForm";


const SignUpPage = () => {

  return (
    <div>
      <SignUpModal/>

      <Carousel />
    </div>
  );
};

export default SignUpPage;
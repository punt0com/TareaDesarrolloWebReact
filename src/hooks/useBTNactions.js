import { useNavigate } from 'react-router-dom';

const useButtonActions = () => {
  const navigate = useNavigate();

  const onCompleteList = () => {
    navigate('/completeList');
  };

  const onSpecificSearch = () => {
    navigate('/specificSearch');
  };

  const onAddProduct = () => {
    navigate('/addProduct');
  };

  const onOrderStock = () => {
    navigate('/orderStuck');
  };

  const returnHome = () => {
    navigate('/');
  };

  return {
    onCompleteList,
    onSpecificSearch,
    onAddProduct,
    onOrderStock,
    returnHome
  };
};

export default useButtonActions;
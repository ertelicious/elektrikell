import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { convertToInputFormat, convertToRequestFormat } from '../utils/dates';
import { useSelector, useDispatch } from 'react-redux';
import { setFrom, setUntil } from '../services/stateService';

function SearchForm({ handleClose }) {

    const dispatch = useDispatch();
    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);


    const handleSubmit = (event) => {
        event.preventDefault();
        const from = event.target.from.value; // взять из ивента и забрать значение
        const until = event.target.until.value;

        dispatch(setFrom(convertToRequestFormat(from))); // после нажатия submit назначаем эти данные, кот. пользователь вбил
        dispatch(setUntil(convertToRequestFormat(until)));

        handleClose();
    };

  return (
    <Form onSubmit={handleSubmit}> 
    {/* // onSubmit trigger event, handleSubmit handle event */}
        <Form.Group className="mb-3">
            <Form.Label>From</Form.Label>
            <Form.Control 
                type="datetime-local" 
                placeholder="Date from" 
                name="from" 
                defaultValue={convertToInputFormat(from)} 
            /> {/* defaultValue={} - при первой отрисовке будет виден */}
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Until</Form.Label>
            <Form.Control 
                type="datetime-local" 
                placeholder="Date until" 
                name="until" 
                defaultValue={convertToInputFormat(until)}
            />      
        </Form.Group>
        <Button 
        variant="primary" className="w-100" type="submit">Search</Button>
    </Form>
  );
}

export default SearchForm;
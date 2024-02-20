import { ErrorIcon } from '@components/ui/graphics';
import { Result } from './result';

const regError = ({ type }: { type: boolean }) => {
    return (
        <Result
            icon={<ErrorIcon />}
            title='Данные не сохранились'
            text={
                type
                    ? 'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
                    : 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            }
            button={type ? 'Назад к регистрации' : 'Повторить'}
            navButton='/auth'
        />
    );
};

export default regError;

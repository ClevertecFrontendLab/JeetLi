import { SucseccIcon } from '@components/ui/graphics';
import { Result } from './result';

const regSucsess = () => {
    return (
        <Result
            icon={<SucseccIcon />}
            title='Регистрация успешна'
            text='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            button='Войти'
            navButton='/auth'
        />
    );
};

export default regSucsess;

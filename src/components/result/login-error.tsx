import { Result } from './result';

import { WarnIcon } from '@components/ui/graphics';

const LoginError = () => {
    return (
        <Result
            icon={<WarnIcon />}
            title='Вход не выполнен'
            text='Что-то пошло не так. Попробуйте еще раз'
            button='Повторить'
            navButton='/auth'
        />
    );
};

export default LoginError;

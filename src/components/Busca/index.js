import { useEffect } from 'react';
import styles from './Busca.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';

export default function Busca(){
    const dispatch = useDispatch();
    const busca = useSelector(state => state.busca);
    const location = useLocation();
    useEffect(() => {
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])
    return (
        <div className={styles.busca}>
            <input 
                className={styles.input} 
                placeholder="O que você Procura?"
                value={busca} 
                onChange={evento => dispatch(mudarBusca(evento.target.value))}
            />
        </div>
    )
}
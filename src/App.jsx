import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTodo } from './hooks/useTodo';
import Header from './components/Header';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import './App.css';
import { FaMoon } from 'react-icons/fa';




function App() {
    const [modoNoche, setModoNoche] = useState(false);

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    } = useTodo();

    const toggleModoNoche = () => {
        setModoNoche(!modoNoche);
    };

    return (
        <ChakraProvider>
        <Router>
            <div className={`card-to-do ${modoNoche ? 'modo-noche' : ''}`}>
                <Header modoNoche={modoNoche} />
                <div className="content-container">
            
                <div className="top-left-buttons">
                            <button onClick={toggleModoNoche}>
                                <FaMoon /> {/* Ícono de luna */}
                            </button>
                        </div>
                    
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route
                            path="/todos"
                            element={
                                <>
                                    <h1>Lista de tareas</h1>
                                    <div className='counter-todos'>
                                        <h3>
                                            N° Tareas: <span>{todosCount}</span>
                                        </h3>
                                        <h3>
                                            Pendientes: <span>{pendingTodosCount}</span>
                                        </h3>
                                    </div>

                                    <div className='add-todo'>
                                        <h3>Agregar Tarea</h3>
                                        <TodoAdd handleNewTodo={handleNewTodo} />
                                    </div>

                                    <TodoList
                                        todos={todos}
                                        handleUpdateTodo={handleUpdateTodo}
                                        handleDeleteTodo={handleDeleteTodo}
                                        handleCompleteTodo={handleCompleteTodo}
                                    />
                                </>
                            }
                        />
                        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                    </Routes>
                    </div>
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;

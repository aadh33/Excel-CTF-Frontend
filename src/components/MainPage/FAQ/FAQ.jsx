import "./FAQ.css";
import React, {useState} from 'react';

const FAQ = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (index) => {
      if (selected === index) {
        return setSelected(null);
      }
      setSelected(index);
    };

	return (
        <div className='faq__container'>
            <div>
                <span className="title">FAQ's</span>
            </div>
            
            <div className="wrapper">
               <div className="accordion-faq">
                {dataCollection.map((item,index) => (
                    <div key={index} data-aos="zoom-in"
                    aos-delay="150"
                    className={`item aos-init aos-animate ${
                      selected === index ? "selected" : ""
                    }`}>
                        <div className="accordion__faq-heading" onClick={() => toggle(index)}>
                            <h2>
                                {item.question}
                            </h2>
                            { <div>
                            {selected == index ? (
                             <> 
                                <span className="verticle">-</span>
                             </>
                            ) : (
                             <>
                                <span className="verticle">+</span>
                             </>
                            )}
                        </div>}
                        </div>
                            <div className={selected === index ? "content show" : "content"}>
                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    
    );
};
const dataCollection = [
    {
        question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo voluptatum nostrum sed repudiandae, dignissimos, quis repellat provident adipisci assumenda nesciunt perspiciatis impedit corporis dolore dolores possimus asperiores consequatur ratione.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit dolorem nam debitis saepe nostrum natus sequi dolores vitae beatae dolorum distinctio, numquam quia? Sunt laborum natus mollitia beatae expedita.'
    }, {
        question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo voluptatum nostrum sed repudiandae, dignissimos, quis repellat provident adipisci assumenda nesciunt perspiciatis impedit corporis dolore dolores possimus asperiores consequatur ratione.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit dolorem nam debitis saepe nostrum natus sequi dolores vitae beatae dolorum distinctio, numquam quia? Sunt laborum natus mollitia beatae expedita.'
    }, {
        question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo voluptatum nostrum sed repudiandae, dignissimos, quis repellat provident adipisci assumenda nesciunt perspiciatis impedit corporis dolore dolores possimus asperiores consequatur ratione.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit dolorem nam debitis saepe nostrum natus sequi dolores vitae beatae dolorum distinctio, numquam quia? Sunt laborum natus mollitia beatae expedita.'
    }, {
        question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo voluptatum nostrum sed repudiandae, dignissimos, quis repellat provident adipisci assumenda nesciunt perspiciatis impedit corporis dolore dolores possimus asperiores consequatur ratione.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit dolorem nam debitis saepe nostrum natus sequi dolores vitae beatae dolorum distinctio, numquam quia? Sunt laborum natus mollitia beatae expedita.'
    }, {
        question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo voluptatum nostrum sed repudiandae, dignissimos, quis repellat provident adipisci assumenda nesciunt perspiciatis impedit corporis dolore dolores possimus asperiores consequatur ratione.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, suscipit dolorem nam debitis saepe nostrum natus sequi dolores vitae beatae dolorum distinctio, numquam quia? Sunt laborum natus mollitia beatae expedita.'
    }            
];

export default FAQ;
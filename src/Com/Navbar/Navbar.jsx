import React from 'react';
import { Link } from 'react-router-dom';
import s from './navbar.module.css';

const Navbar = ({ nav }) => {
    return (
        <div className={nav ? s.items : s.it} >
            <div className={s.item} >
                <Link to='/videos' activeClassName={s.activ}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwcnzPicmGBgg90rpqE1sI7gYs1blq2-yxQ&usqp=CAU" />
                    <span>Asosiy</span>
                </Link>
            </div>
            <div className={s.item}>
                <Link to='/trendy' activeClassName={s.activ}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzJ4kPBseUCJGzGBwUZySIy10DowrDSaGVw&usqp=CAU" />
                    <span>Trendda</span>
                </Link>
            </div>
            <div className={s.item}>
                <Link to='/podpiska' activeClassName={s.activ}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADPz89hYWHMzMz09PSWlpZTU1P6+vrT09NaWlr5+fkwMDDv7+/c3NyLi4tLS0s7OzuoqKi1tbXl5eVxcXE8PDwiIiKvr68pKSm+vr5DQ0OFhYV3d3ff398qKiqfn58SEhIYGBhnZ2eampp/f3/Dw8N+7wEzAAADbklEQVR4nO2di5KaQBBFOyoKKqAYo9FE12TX///ETNVWElOlm3k03T14zwcwfWqhGRr2SgQAAAAAAAAAAICnphnJ0ogbzj7JMhM3HAsbjmEIQxjCEIYwhCEMYQhDGMIQhiYN58KGc3HD/VSWvbghAAAAAAAAAAAAMmQ/H9tjzjnYmAqPnfyYwhCGMFQHhjCEoT4whCEM9YEhDGGoDwxDWBQWWTAaAgAAAAAAAAAAz8CpmtikOjHYVe1ZexzzIcu2StEru6/aBh6cuzJW8GD7z/eX8yFOcKtdeADbCL9iqV11EMsiVLDOS9Ap1mGC5VG74mCOYf0mp2vwN0HX4kG72iiuAefoTrvYKHb+52mnXWsknbfhWrvUSNa+gpV2pdH47lFb7UKjaT0NV9qFRrPyEyy160zAr5vW2mUm4Ld1a7TLTMAvP3KkXWYCIxjC0DwwhKF9xA2P0mnD4oYzmsgOfBQMiTaSc3MVQ1q88B3wf+gYOsdvfIf8GC1Dos9C40k9Q/fEIhJhp2lINBF4UaBrSHTofQ6rbUjly4Xv4PdQNyQq+h3kGTAkqvtsqyYMiU79tVUjhkTXvkayZgzdbvXCt8oNhgyJetmtmjLspa3aMnS71e98S71jzdC1VeYhgD1DYh4CWDR0bZVxR27TkEq+7waMGjpHrrZq1tDtVnnaqmFDpiGAaUPXVtO/cjFuyDAEMG9I1P1IWjADw8Tdag6GaUOAPAzdjjz6B1ByMTz9HLZhys0/B8PFwDtNmTjbMG+Y/CBl3HDyJXlB04YNxwzVsCHTUMqsYfHGtKBVw1e2BW0abvjWM2l4TW+gN9gzrJhfQlkzjH+GeIQtw5qrgd5gyXDRS1KhIcP9hW+VG8wY9vZhjRFD7gZ6gwnDU5+/QmvAkOn9xCPUDYu+o161DbsL36Hvo2vI+a73EZqGI5EYCj1DmS+E9Qz5v5t5hI5hKfalvo5h6ow3DHHDOW1kIzbEDdfSMTf47zwY2geGMLQPDN8ZfvLH8NNbhp/AM/wUpSdIwhp+mtnwE+meIFWQMk2G9Bekq3axUQSkez5BQiuVrF9IiLAOTPXOLAo6Jgy6yOuWsQ4WdCdqTtfiNi54/prLTWMX1EX/ocvhVF0G3OjvULW2nzRWbRX9ywh/KOtmZJOmTrcDAAAAAAAAAABAJvwCeJ58WL2IYUgAAAAASUVORK5CYII=" alt="" />
                    <span> Podpiska</span>
                </Link>
            </div>
            <div className={s.item}>
                <Link to='/tarix' activeClassName={s.activ}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAe1BMVEUAAAD///+AgID8/PwEBASDg4MSEhK1tbUhISEHBwf4+Pj19fXx8fG4uLgxMTE8PDzX19d1dXVGRkY3NzcuLi7q6upNTU3k5OSbm5tbW1uNjY2rq6tqamrc3NxycnIWFhbFxcXKyspSUlKKiopfX18mJiYdHR2VlZWgoKA3Wvn7AAAHqklEQVR4nO1da3uyPAx2gBxEREU8H/Cwuf//C1+YzzbXpqVpWvC9rt6fNc0NaZq0aRgMHBwcHBwcHBwcHBwcHBwcHBwcDOOU37zPqDqU45Hvj8bltIrW3iYP+9ZLBafLNivfBFhl1+Urswgv64NI919M78ukb00hnPaV3679A6Ps9mIvIrllyto/4EeXoG+tf7C4j3HaP1Be4741/8I80tH+8Rp2Rd/aD+ZnbfW/UOW9qp9XNPUbZJPe1I93dPUbfJ56UT8Zjszo//aWznrwSPnUlPoNzl3bUXI3qX4Nf9jpS1gYffwPnN+7039vzPqfkW46Uj/5tKF+g3snZvRxbtfEP0Tb/bxYxGGShPGimO+30UEhWqo6iPEWqxYlxtFxAsbLyeQYtQVNB+sTYS5XYTorpGYQFJ58/peWQ4uLbPqW24WKjMlWmLLVSOc29d9I7DhbKk/BYJmJ5YyWvegfIQPjQhyE+9YYXIT675Rs5y8mwlBwZMmK5iL7n2pOvLloPqdWZvJC4H8IoWQyS2GZpQVv+iHw/9EHRWosmM0H4ytacgYH8o9UwTN4YlWmowo4/jkYSMpz+NXe6ZKfsYfNx8iLDmGPajQ2XYAOyNhDWkPSU4MTOQH9nWduAA+SfzY3DbaAeH9vTHyNPTSVh6ak55D+F1PSH4CiFN9Qpg8akNHn3wByE4aMCDJQg/YvG2ZmQnAMeCDDTvoBwBelJvbsgKAxMiAWALAefNKlAjN4ZSn1DoE1mT6P+f1n39qmfs67oowqc84/FHL8JsaMH42aGvAvQHECPP9FfTg+uia+An4GpIrxvx6BmM9waAbLOwZV16xHADCinY7e33jnxE1VF0dNAvyy71POMvkoTnlOaRIAvMYVr/c3Em4LTf196hLgF85SPyLacE9Dff9Hm8CEG1Q/8OWcGiKG0CbAOw7tyOXELYwIl6ZPgHPdvm7owoXomEVFnwC/eN6QAr7BWRBm15VAYEl5cE8IWQtCuQMCgYB1fiO9CqkL+yC2mH8TCAy4Q2i9DXcuQ0LF5hQCnCfVywDZ+rcp6t8UAgM2nsAN/Q8n9jHgMmwSAS7B13Gk3BTAxbUkAtxSoDMJroyMMS4kIREI2LRAJ6BjVwHkgk4iwIUTOisB64yRqTCNAJvXrPAiuDmM3OCgEeAcKX4Ws/PIR66GNAIJGwXgNydujIQD8v80AtwihD+vYV0xNignEmBdCH43mQ0kUIHQgEyAzcbXaAmsI8MeCBAJsLkIPitjswps/QKRALs5UaElsLMIu0FGJMA6QXw4x65j2HoUIoEFM3yJlsCWdmD3x4gEYmb4MVoCe7CEXQqJBEJm+BQtgV0KsWkpkUDCDO8LfwkekqtDuMB0RoDGQLxAEglgTIjAQLLAP/8swu+QoyaxNgNZgPLnh6Mhdgrh3KgmA2mAxfx2hdxiRi5kWgzkASL38wy1FGJDCQ0GLQEu/wd/i1hL0MEcmkFbgA79p1TfZmZ3F9vDaSSD1gRjCV5srVQzazahUdhVQzFQSJASD6pq9e9qdqSTUiIYqCV4H2B1dKmSGnFJvVI0r8xAOUGFq6PP7dpobqsoMkAU4wVHsOK69fKh7saWEgNcMeEJrPkdH+U7rdr7mgoM0MWQ+RkSM5Ul2YTN3VYGGsWcwR60o5247oWyvd7CQK8YNVxDha2pJwrxSAccUgbaxbTFGRJ3EDxZ2hGThAGlGPgGXr4Cq0cK9lfIQz4hA1oxc3gH7AgMEcjHrAIG5GLsBVdEANZPGTjoBhmYKCbfMKWhoC81UWoAMDBTDJ9cn+0Irp8yUuzBMTBWzP/+u8qmYLLPLQIjrXIbhoEx/WtcvmNlOCiklFk9w7Olf5MqfG1cHsC5yflQ7ZIzz5b+NeLm/AR2jlzFmX7Rn2dN/0GTKsCWYbTs0rOnf21HYE6QcKk0qfDVs6e/bMQ/IJUeN/I61d948fdg16n+5svvB9028wIuQPTfAwoB4AqKpftGdgBcAjJ1ma8TBMDtbnyFQY8ALsKN+2lepYchr7/NC1PGYfEyKAzD7g28jqvRbkMZQ7OvF7wQbeHK7A+GZuVD9m++MwM34KehEQKwKcDYYivJ7wdWGfFyIdzdw2LLsN8XvrLXGANbo4fAs8H65EvjXbUm+QUz4SqSqYqaw0ztRcGcw6C05wEPMmuU9iYw5PCkhy0SiBsk2UsCQIddR+0aUa+4y5atFlUD2dEBtntuLu5zZq9JWP3SBTbboFLvwxwsJa1ubbZpqx+crNHfaqgUfRX3/hrl1aPLBq/nsyc3pSBva1VoPYmP23qllrtjIWgWOcskJvh4AB300haELn/gT3fD/byIwyRo2nXm8/09e5V2nbUZsBe0jGHbVd/di1av9TaMDfdckiE20PGbBS2owiLwkO362+B7XffOXpxN6n+2mb+LANcy6WDc0/7PCaxBQcNf97f/NtH/eMIPoj6s5xeFwrImQ9b//n+x0zYkf/cau+fxVR7hCfAqHxFpEFwi5GsYvdJnXL4Q3jLlnvij6NU+pPNAsrwrfJdgep+/5KeM/iFcXjNhe/lVNHzpj0n9ICw2s3VUTctx6vtp8zmv3Xq2Kf4Xujs4ODg4ODg4ODg4ODg4ODg4vDb+A1quV3usXKLpAAAAAElFTkSuQmCC" />
                    <span>Tarix</span>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;
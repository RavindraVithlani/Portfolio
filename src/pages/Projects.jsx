import Card from "../components/Card"

export default function Projects(){
    return (
        <>
                <h1>Projects</h1>
                <div className="projects">
                    <Card title={"BeanBot"} link={'#'} preview = {'/imgs/beanbot_preview.png'}>
                        An AI powered mobile application to identify pulses and display its information.
                    </Card>
                    <Card title={"Abhyuday2k24"} link={'https://abhyuday2k24.tech'} preview = {'/imgs/abh_preview.png'}>
                        A website developed for fest conducted at MCA Department of MSRIT (2024).
                    </Card>
                    
                    <Card title={"BookNook"} link={'#'} preview = {'/imgs/booknook_preview.png'}>
                        A mobile application that allows users to search the google books and view description of the searched books.
                    </Card>
                    <Card title={"Sudoku App"} link={'#'} preview = {'/imgs/sudoku_preview.png'}>
                        A simple Sudoku Game developed using NextJS. Implementing backtracking to solve sudoku puzzles.
                    </Card>
                    <Card title={"Stock Management App"} link={'https://bannerapp.spava.in'} preview = {'/imgs/stocks_preview.png'}>
                        A website developed to manage inventory and stock records.
                    </Card>
                    <Card title={"Snakes and Ladders"} link={'https://abhyuday2k24.tech'} preview = {'/imgs/sandl_preview.png'}>
                        A simple game of Snakes and Ladders developed using only HTML, CSS and Javascript.
                    </Card>
                    <Card title={"Abhyuday2k23"} link={'#'} preview = {'/imgs/abhyuday7_preview.png'}>
                        A website developed for fest conducted at MCA Department of MSRIT (2023).
                    </Card>
                </div>

        </>
        
    )
}


// BeanBot
// Abhyuday2k24.tech
// Book Shelf
// sudoku app
// stocks app
// snakes and ladders
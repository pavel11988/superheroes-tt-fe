const Editor = ({setViewEditor}) => {
    return(
        <div>
                <h2>EDITOR</h2>
                <button type="button" onClick={() => {setViewEditor(false)}}>TEMP_BUTTON Close</button>
        </div>
    )
}

export default Editor
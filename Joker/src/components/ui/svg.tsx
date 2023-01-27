import React from 'react';

import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

export function BackgroundSymbols({color = '#2B0329', ...props}: SvgProps) {
  return (
    <Svg viewBox="0 0 376 846" fill="none" {...props}>
      <G clipPath="url(#a)" fill={color}>
        <Path d="M189.591 313.1v24.55h2.842v3.106h-6.197v-30.747h6.197v3.091h-2.842Zm9.931 24.55V313.1h-2.857v-3.091h6.197v30.747h-6.197v-3.106h2.857ZM249.202 181.731l.41.015c.869 0 1.435-.171 1.699-.513.273-.332.41-1.049.41-2.153v-5.859c0-1.045.142-1.895.425-2.549.283-.567.825-1.089 1.626-1.568-1.367-.82-2.051-1.899-2.051-3.237v-6.665c0-1.133-.137-1.865-.41-2.197-.283-.352-.85-.527-1.699-.527l-.41.014v-2.959h.834l1.026-.058c1.435 0 2.466.385 3.091 1.157.634.781.952 2.051.952 3.808v7.237c0 .508.171.962.513 1.362.341.391.805.654 1.391.791v2.813c-.683.166-1.172.463-1.465.893-.293.43-.439 1.065-.439 1.904v6.534c0 1.67-.313 2.88-.938 3.632-.615.762-1.611 1.143-2.988 1.143l-1.128-.044h-.849v-2.974ZM270.977 488.693h-.41c-.879 0-1.45.171-1.714.513-.263.341-.395 1.054-.395 2.138v5.889c0 1.035-.142 1.88-.425 2.534-.283.567-.825 1.089-1.626 1.568 1.367.82 2.051 1.904 2.051 3.252v6.635c0 1.114.132 1.846.395 2.198.274.351.845.527 1.714.527l.41-.015v2.959h-.835l-1.04.059c-1.435 0-2.465-.386-3.09-1.157-.625-.772-.938-2.041-.938-3.809v-7.207c0-.508-.171-.957-.513-1.348-.341-.4-.805-.669-1.391-.805v-2.827c.683-.157 1.172-.45 1.465-.879.293-.43.439-1.07.439-1.919v-6.534c0-1.669.308-2.88.923-3.632.625-.762 1.626-1.143 3.003-1.143l1.128.029.849.03v2.944ZM14.63 785.63v-2.49h15.6v2.49h-15.6Zm0 4.746v-2.49h15.6v2.49h-15.6Zm20.038 5.288v-3.369l11.089-5.244-11.09-5.274v-3.339l14.693 7.177v2.886l-14.692 7.163ZM26.833 165.589v-2.49h15.6v2.49h-15.6Zm0 4.746v-2.49h15.6v2.49h-15.6Zm34.364-16.846 3.047 1.172c-1.065 2.549-1.812 4.902-2.241 7.061a33.107 33.107 0 0 0-.484 3.457 44.434 44.434 0 0 0-.16 3.94c0 1.436.053 2.759.16 3.97.108 1.201.269 2.349.484 3.442.42 2.149 1.167 4.497 2.24 7.046l-3.046 1.172c-2.129-4.463-3.193-9.673-3.193-15.63 0-5.957 1.064-11.167 3.193-15.63Zm11.235 31.26-3.047-1.172c1.074-2.549 1.821-4.897 2.241-7.046.44-2.148.66-4.619.66-7.412 0-2.773-.22-5.239-.66-7.397-.43-2.159-1.177-4.512-2.241-7.061l3.047-1.172c2.129 4.463 3.193 9.673 3.193 15.63 0 5.957-1.064 11.167-3.193 15.63ZM113.445 686.482c0-.547.2-1.02.601-1.421.4-.4.879-.6 1.435-.6.557 0 1.035.2 1.436.6.4.401.6.879.6 1.436 0 .566-.2 1.05-.6 1.45a1.951 1.951 0 0 1-1.436.586c-.576 0-1.059-.195-1.45-.586-.391-.39-.586-.879-.586-1.465Zm.381-3.398v-17.578h3.311v17.578h-3.311Zm9.155-7.852v-2.49h15.6v2.49h-15.6Zm0 4.746v-2.49h15.6v2.49h-15.6Zm19.584-4.746v-2.49h15.6v2.49h-15.6Zm0 4.746v-2.49h15.6v2.49h-15.6ZM331.535 389.764h3.398v28.257h-3.398v-28.257Zm18.031 0h3.399v28.257h-3.399v-28.257ZM8.97 283.34V267.2h4.68v16.14H8.97Zm2.34-18.39c-.86 0-1.56-.25-2.1-.75s-.81-1.12-.81-1.86.27-1.36.81-1.86 1.24-.75 2.1-.75c.86 0 1.56.24 2.1.72.54.46.81 1.06.81 1.8 0 .78-.27 1.43-.81 1.95-.52.5-1.22.75-2.1.75Zm8.323 18.39v-16.5c0-1.82.54-3.27 1.62-4.35 1.08-1.1 2.62-1.65 4.62-1.65.68 0 1.33.07 1.95.21.64.14 1.18.36 1.62.66l-1.23 3.39c-.26-.18-.55-.32-.87-.42a3.4 3.4 0 0 0-1.02-.15c-.68 0-1.21.2-1.59.6-.36.38-.54.96-.54 1.74v1.5l.12 2.01v12.96h-4.68Zm-2.49-12.18v-3.6h11.19v3.6h-11.19Zm27.935 18c-1.2-1.82-2.13-3.92-2.79-6.3-.64-2.4-.96-4.98-.96-7.74s.32-5.34.96-7.74c.66-2.42 1.59-4.52 2.79-6.3h4.47c-1.26 2.26-2.18 4.54-2.76 6.84-.58 2.28-.87 4.68-.87 7.2 0 2.52.29 4.93.87 7.23.58 2.28 1.5 4.55 2.76 6.81h-4.47Zm10.62 0h-4.47c1.3-2.26 2.23-4.53 2.79-6.81.58-2.3.87-4.71.87-7.23 0-2.52-.29-4.92-.87-7.2-.56-2.3-1.49-4.58-2.79-6.84h4.47c1.24 1.78 2.18 3.88 2.82 6.3.64 2.4.96 4.98.96 7.74s-.32 5.34-.96 7.74c-.64 2.38-1.58 4.48-2.82 6.3ZM326.837 271.757l4.072 4.922.132-.146a51.83 51.83 0 0 0 1.245-1.407c.391-.459.767-.923 1.128-1.391l2.227 2.285a17.15 17.15 0 0 1-1.084 1.362c-.44.518-.967 1.113-1.582 1.787l4.189 5.171h-4.248l-2.256-2.768c-2.07 2.138-4.224 3.208-6.46 3.208-2.002 0-3.701-.64-5.098-1.919-1.367-1.289-2.05-2.881-2.05-4.776 0-2.256 1.084-4.131 3.252-5.625l1.479-1.01a.764.764 0 0 0 .103-.074l.205-.161c-1.494-1.592-2.241-3.159-2.241-4.702 0-1.523.498-2.764 1.494-3.721 1.015-.957 2.324-1.435 3.925-1.435 1.553 0 2.837.464 3.853 1.391 1.016.928 1.523 2.1 1.523 3.516 0 .977-.278 1.86-.835 2.651-.546.791-1.538 1.739-2.973 2.842Zm-2.71 1.919-.191.132c-1.396.967-2.348 1.743-2.856 2.329-.498.586-.747 1.206-.747 1.86 0 .938.376 1.797 1.128 2.579.781.752 1.641 1.127 2.578 1.127 1.318 0 2.837-.864 4.556-2.592l-4.468-5.435Zm.732-4.321.279-.205c.478-.362.874-.674 1.186-.938.313-.273.537-.503.674-.688.293-.362.439-.806.439-1.333 0-.596-.2-1.079-.6-1.45-.401-.371-.938-.557-1.611-.557-.616 0-1.133.19-1.553.571-.42.362-.63.825-.63 1.392 0 .664.264 1.318.791 1.963l.85 1.025c.029.049.087.122.175.22Zm24.99 2.402 4.072 4.922.132-.146a51.83 51.83 0 0 0 1.245-1.407c.391-.459.767-.923 1.128-1.391l2.226 2.285c-.273.391-.634.845-1.083 1.362a66.77 66.77 0 0 1-1.583 1.787l4.19 5.171h-4.248l-2.256-2.768c-2.07 2.138-4.224 3.208-6.46 3.208-2.002 0-3.701-.64-5.098-1.919-1.367-1.289-2.05-2.881-2.05-4.776 0-2.256 1.084-4.131 3.252-5.625l1.479-1.01a.764.764 0 0 0 .103-.074c.048-.039.117-.092.205-.161-1.494-1.592-2.242-3.159-2.242-4.702 0-1.523.499-2.764 1.495-3.721 1.015-.957 2.324-1.435 3.925-1.435 1.553 0 2.837.464 3.853 1.391 1.016.928 1.523 2.1 1.523 3.516 0 .977-.278 1.86-.835 2.651-.546.791-1.538 1.739-2.973 2.842Zm-2.71 1.919-.191.132c-1.396.967-2.348 1.743-2.856 2.329-.498.586-.747 1.206-.747 1.86 0 .938.376 1.797 1.128 2.579.781.752 1.64 1.127 2.578 1.127 1.318 0 2.837-.864 4.556-2.592l-4.468-5.435Zm.732-4.321.279-.205c.478-.362.874-.674 1.186-.938.313-.273.537-.503.674-.688.293-.362.439-.806.439-1.333 0-.596-.2-1.079-.6-1.45-.401-.371-.938-.557-1.612-.557-.615 0-1.132.19-1.552.571-.42.362-.63.825-.63 1.392 0 .664.264 1.318.791 1.963l.849 1.025c.03.049.088.122.176.22ZM314.16 148.696v4.38c-.752-.918-1.426-1.548-2.022-1.89-.585-.351-1.274-.527-2.065-.527-1.24 0-2.27.435-3.091 1.304-.82.869-1.23 1.958-1.23 3.266 0 1.338.395 2.437 1.186 3.296.801.86 1.822 1.289 3.062 1.289.791 0 1.489-.171 2.095-.512.585-.333 1.274-.977 2.065-1.934v4.351c-1.338.693-2.676 1.04-4.014 1.04-2.207 0-4.052-.713-5.537-2.139-1.484-1.436-2.226-3.218-2.226-5.347 0-2.129.752-3.926 2.255-5.39 1.504-1.465 3.35-2.198 5.538-2.198 1.406 0 2.734.337 3.984 1.011Zm3.588 6.416c0-2.06.737-3.813 2.212-5.259 1.475-1.445 3.271-2.168 5.391-2.168 2.129 0 3.935.728 5.42 2.183 1.464 1.455 2.197 3.242 2.197 5.361 0 2.139-.737 3.931-2.212 5.376-1.484 1.436-3.306 2.154-5.464 2.154-2.139 0-3.931-.733-5.376-2.198-1.445-1.445-2.168-3.261-2.168-5.449Zm3.369.059c0 1.425.381 2.553 1.143 3.383.781.84 1.811 1.26 3.091 1.26 1.289 0 2.319-.415 3.09-1.245.772-.83 1.158-1.938 1.158-3.325 0-1.387-.386-2.495-1.158-3.325-.781-.84-1.811-1.26-3.09-1.26-1.26 0-2.281.42-3.062 1.26-.781.84-1.172 1.924-1.172 3.252Zm16.42-7.09h3.311v1.318c1.152-1.142 2.451-1.714 3.896-1.714 1.661 0 2.954.523 3.882 1.568.801.888 1.201 2.339 1.201 4.35v8.745h-3.31v-7.968c0-1.407-.195-2.378-.586-2.915-.381-.547-1.074-.821-2.08-.821-1.094 0-1.87.362-2.329 1.084-.449.713-.674 1.958-.674 3.736v6.884h-3.311v-14.267Zm25.825 2.431-2.725 1.451c-.43-.879-.962-1.319-1.596-1.319-.303 0-.562.103-.777.308a.98.98 0 0 0-.322.762c0 .546.635 1.088 1.904 1.626 1.748.752 2.925 1.445 3.53 2.08.606.634.909 1.489.909 2.563 0 1.377-.508 2.529-1.524 3.457-.986.879-2.178 1.319-3.574 1.319-2.393 0-4.087-1.167-5.083-3.501l2.812-1.304c.391.683.689 1.118.894 1.304.4.371.879.556 1.436.556 1.113 0 1.67-.508 1.67-1.523 0-.586-.43-1.133-1.29-1.641a45.394 45.394 0 0 0-.996-.483 98.914 98.914 0 0 1-1.01-.484c-.957-.468-1.631-.937-2.022-1.406-.498-.596-.747-1.362-.747-2.3 0-1.24.425-2.265 1.274-3.076.87-.81 1.924-1.216 3.165-1.216 1.826 0 3.183.943 4.072 2.827Zm8.363.645v11.191h-3.296v-11.191h-1.406v-3.076h1.406v-5.23h3.296v5.23h2.564v3.076h-2.564ZM103.943 813.099v24.741h-3.296v-24.741h3.296Zm18.236 18.384h-10.224c.088 1.172.468 2.104 1.142 2.798.674.683 1.538 1.025 2.593 1.025.82 0 1.499-.195 2.036-.586.527-.391 1.128-1.113 1.802-2.168l2.783 1.553a11.39 11.39 0 0 1-1.362 1.889 7.515 7.515 0 0 1-1.538 1.289 6.288 6.288 0 0 1-1.773.733 8.64 8.64 0 0 1-2.065.234c-2.129 0-3.838-.683-5.127-2.051-1.289-1.376-1.934-3.203-1.934-5.478 0-2.256.625-4.082 1.875-5.479 1.26-1.377 2.93-2.065 5.01-2.065 2.1 0 3.76.669 4.981 2.007 1.21 1.328 1.816 3.169 1.816 5.522l-.015.777Zm-3.384-2.696c-.458-1.757-1.567-2.636-3.325-2.636-.4 0-.776.063-1.128.19a3.118 3.118 0 0 0-.966.527 3.274 3.274 0 0 0-.733.821 3.86 3.86 0 0 0-.469 1.098h6.621Zm11.733-2.138v11.191h-3.296v-11.191h-1.406v-3.076h1.406v-5.23h3.296v5.23h2.564v3.076h-2.564ZM148.162 121.567c0-1.416.542-2.646 1.626-3.691 1.104-1.045 2.378-1.568 3.824-1.568 1.484 0 2.763.528 3.837 1.582 1.075 1.045 1.612 2.295 1.612 3.75 0 1.465-.537 2.72-1.612 3.765-1.074 1.045-2.368 1.567-3.881 1.567-1.485 0-2.759-.532-3.824-1.596-1.054-1.065-1.582-2.334-1.582-3.809Zm2.549.044c0 .82.283 1.514.85 2.08.566.566 1.255.85 2.065.85.791 0 1.47-.284 2.036-.85.567-.566.85-1.25.85-2.051 0-.791-.283-1.469-.85-2.036a2.794 2.794 0 0 0-2.05-.849c-.801 0-1.485.283-2.051.849-.567.567-.85 1.235-.85 2.007Zm15.747-5.464 1.597.908-12.949 22.471-1.612-.967 12.964-22.412Zm-3.984 17.813c0-1.407.542-2.632 1.626-3.677 1.103-1.045 2.378-1.568 3.823-1.568 1.494 0 2.778.528 3.853 1.582 1.074 1.045 1.611 2.295 1.611 3.75 0 1.475-.542 2.73-1.626 3.765-1.065 1.035-2.358 1.553-3.882 1.553-1.484 0-2.759-.527-3.823-1.582-1.055-1.055-1.582-2.329-1.582-3.823Zm2.563.058c0 .821.279 1.514.835 2.08.567.567 1.255.85 2.066.85.8 0 1.479-.283 2.036-.85.566-.566.849-1.25.849-2.051 0-.8-.283-1.484-.849-2.05-.557-.567-1.24-.85-2.051-.85-.791 0-1.47.283-2.036.85-.566.566-.85 1.24-.85 2.021ZM209.666 614.693v-3.369l11.089-5.245-11.089-5.273v-3.34l14.692 7.178v2.886l-14.692 7.163Zm19.13-10.034v-2.491h15.6v2.491h-15.6Zm0 4.746v-2.491h15.6v2.491h-15.6ZM138.961 232.446l.234-.512c.645-1.358 1.323-2.329 2.036-2.915.713-.586 1.572-.879 2.578-.879 1.006 0 2.242.342 3.706 1.025 1.319.625 2.354.938 3.106.938.82 0 1.382-.196 1.684-.586l.894-1.114c.215-.273.415-.41.601-.41.449 0 .971.415 1.567 1.245-.752 1.485-1.514 2.549-2.285 3.194-.781.635-1.704.952-2.769.952-.879 0-2.153-.381-3.823-1.143-1.27-.547-2.261-.82-2.974-.82-.244 0-.532.073-.864.22-.342.136-.561.278-.659.425l-.938 1.303c-.195.254-.385.381-.571.381-.439 0-.947-.434-1.523-1.304ZM12.76 605.482c-1.9 0-3.38-.48-4.44-1.44-1.06-.98-1.59-2.43-1.59-4.35v-14.16h4.68v14.1c0 .68.18 1.21.54 1.59.36.36.85.54 1.47.54.74 0 1.37-.2 1.89-.6l1.26 3.3c-.48.34-1.06.6-1.74.78-.66.16-1.35.24-2.07.24Zm-8.52-12.42v-3.6h11.19v3.6H4.24Zm16.026 12.18v-16.14h4.47v4.56l-.63-1.32c.48-1.14 1.25-2 2.31-2.58 1.06-.6 2.35-.9 3.87-.9v4.32c-.2-.02-.38-.03-.54-.03-.16-.02-.33-.03-.51-.03-1.28 0-2.32.37-3.12 1.11-.78.72-1.17 1.85-1.17 3.39v7.62h-4.68Zm16.468 6.06c-.84 0-1.67-.13-2.49-.39-.82-.26-1.49-.62-2.01-1.08l1.71-3.33c.36.32.77.57 1.23.75a4 4 0 0 0 1.41.27c.66 0 1.18-.16 1.56-.48.4-.3.76-.81 1.08-1.53l.84-1.98.36-.51 5.79-13.92h4.5l-7.29 17.13c-.52 1.3-1.12 2.32-1.8 3.06-.66.74-1.4 1.26-2.22 1.56-.8.3-1.69.45-2.67.45Zm2.76-5.43-7.2-16.77h4.83l5.58 13.5-3.21 3.27Zm31.143 5.19c-1.86 0-3.27-.47-4.23-1.41-.96-.92-1.44-2.24-1.44-3.96v-5.43c0-.48-.12-.83-.36-1.05-.24-.24-.56-.36-.96-.36h-.99v-3.66h.99c.4 0 .72-.12.96-.36s.36-.59.36-1.05v-5.43c0-1.74.48-3.07 1.44-3.99.96-.92 2.37-1.38 4.23-1.38h1.74v3.66h-.54c-.72 0-1.27.19-1.65.57-.36.38-.54.93-.54 1.65v4.8c0 .88-.12 1.57-.36 2.07-.24.5-.62.86-1.14 1.08-.5.22-1.15.38-1.95.48v-.54c.8.08 1.45.24 1.95.48.52.22.9.58 1.14 1.08.24.5.36 1.19.36 2.07v4.8c0 .72.18 1.27.54 1.65.38.38.93.57 1.65.57h.54v3.66h-1.74Zm-64.447 74H4.45v-3.66h.54c.72 0 1.26-.19 1.62-.57.38-.38.57-.93.57-1.65v-4.8c0-.88.12-1.57.36-2.07.26-.5.64-.86 1.14-1.08.5-.24 1.15-.4 1.95-.48v.54c-.8-.1-1.45-.26-1.95-.48a2.3 2.3 0 0 1-1.14-1.08c-.24-.5-.36-1.19-.36-2.07v-4.8c0-.72-.19-1.27-.57-1.65-.36-.38-.9-.57-1.62-.57h-.54v-3.66h1.74c1.88 0 3.29.46 4.23 1.38.96.92 1.44 2.25 1.44 3.99v5.43c0 .46.12.81.36 1.05s.56.36.96.36h.99v3.66h-.99c-.4 0-.72.12-.96.36-.24.22-.36.57-.36 1.05v5.43c0 1.72-.48 3.04-1.44 3.96-.94.94-2.35 1.41-4.23 1.41ZM266.354 770.802c-1.624 0-3.071-.327-4.34-.98-1.27-.672-2.268-1.596-2.996-2.772-.71-1.176-1.064-2.511-1.064-4.004 0-1.512.354-2.847 1.064-4.004.728-1.176 1.726-2.091 2.996-2.744 1.269-.672 2.716-1.008 4.34-1.008 1.586 0 2.968.336 4.144 1.008a5.986 5.986 0 0 1 2.604 2.828l-3.388 1.82c-.392-.709-.887-1.232-1.484-1.568a3.727 3.727 0 0 0-1.904-.504c-.747 0-1.419.168-2.016.504a3.738 3.738 0 0 0-1.428 1.428c-.336.616-.504 1.363-.504 2.24 0 .877.168 1.624.504 2.24.354.616.83 1.092 1.428 1.428.597.336 1.269.504 2.016.504.69 0 1.325-.159 1.904-.476.597-.336 1.092-.868 1.484-1.596l3.388 1.848a6.164 6.164 0 0 1-2.604 2.828c-1.176.653-2.558.98-4.144.98Zm19.5-.224v-2.94l-.28-.644v-5.264c0-.933-.289-1.661-.868-2.184-.56-.523-1.428-.784-2.604-.784a7.49 7.49 0 0 0-2.38.392c-.765.243-1.419.579-1.96 1.008l-1.568-3.052c.821-.579 1.811-1.027 2.968-1.344a13.293 13.293 0 0 1 3.528-.476c2.296 0 4.079.541 5.348 1.624 1.269 1.083 1.904 2.772 1.904 5.068v8.596h-4.088Zm-4.592.224c-1.176 0-2.184-.196-3.024-.588-.84-.411-1.484-.961-1.932-1.652a4.178 4.178 0 0 1-.672-2.324c0-.896.215-1.68.644-2.352.448-.672 1.148-1.195 2.1-1.568.952-.392 2.193-.588 3.724-.588h4.004v2.548h-3.528c-1.027 0-1.736.168-2.128.504-.373.336-.56.756-.56 1.26 0 .56.215 1.008.644 1.344.448.317 1.055.476 1.82.476.728 0 1.381-.168 1.96-.504.579-.355.999-.868 1.26-1.54l.672 2.016c-.317.971-.896 1.708-1.736 2.212-.84.504-1.923.756-3.248.756Zm19.791 0c-1.774 0-3.155-.448-4.144-1.344-.99-.915-1.484-2.268-1.484-4.06v-13.216h4.368v13.16c0 .635.168 1.129.504 1.484.336.336.793.504 1.372.504.69 0 1.278-.187 1.764-.56l1.176 3.08c-.448.317-.99.56-1.624.728a8.19 8.19 0 0 1-1.932.224Zm-7.952-11.592v-3.36h10.444v3.36h-10.444Zm21.772 11.592c-1.624 0-3.071-.327-4.34-.98-1.269-.672-2.268-1.596-2.996-2.772-.709-1.176-1.064-2.511-1.064-4.004 0-1.512.355-2.847 1.064-4.004.728-1.176 1.727-2.091 2.996-2.744 1.269-.672 2.716-1.008 4.34-1.008 1.587 0 2.968.336 4.144 1.008a5.986 5.986 0 0 1 2.604 2.828l-3.388 1.82c-.392-.709-.887-1.232-1.484-1.568a3.724 3.724 0 0 0-1.904-.504c-.747 0-1.419.168-2.016.504a3.752 3.752 0 0 0-1.428 1.428c-.336.616-.504 1.363-.504 2.24 0 .877.168 1.624.504 2.24a3.752 3.752 0 0 0 1.428 1.428c.597.336 1.269.504 2.016.504.691 0 1.325-.159 1.904-.476.597-.336 1.092-.868 1.484-1.596l3.388 1.848a6.164 6.164 0 0 1-2.604 2.828c-1.176.653-2.557.98-4.144.98Zm19.334-15.512c1.195 0 2.259.243 3.192.728.952.467 1.699 1.195 2.24 2.184.542.971.812 2.221.812 3.752v8.624h-4.368v-7.952c0-1.213-.27-2.109-.812-2.688-.522-.579-1.269-.868-2.24-.868-.69 0-1.316.149-1.876.448-.541.28-.97.719-1.288 1.316-.298.597-.448 1.363-.448 2.296v7.448h-4.368v-20.776h4.368v9.884l-.98-1.26a5.581 5.581 0 0 1 2.324-2.324c1.008-.541 2.156-.812 3.444-.812Zm-68.245 54.72c-1.736 0-3.052-.439-3.948-1.316-.896-.859-1.344-2.091-1.344-3.696v-5.068c0-.448-.112-.775-.336-.98-.224-.224-.523-.336-.896-.336h-.924v-3.416h.924c.373 0 .672-.112.896-.336.224-.224.336-.551.336-.98v-5.068c0-1.624.448-2.865 1.344-3.724.896-.859 2.212-1.288 3.948-1.288h1.624v3.416h-.504c-.672 0-1.186.177-1.54.532-.336.355-.504.868-.504 1.54v4.48c0 .821-.112 1.465-.336 1.932a2.006 2.006 0 0 1-1.064 1.008c-.467.205-1.074.355-1.82.448v-.504c.746.075 1.353.224 1.82.448.485.205.84.541 1.064 1.008.224.467.336 1.111.336 1.932v4.48c0 .672.168 1.185.504 1.54.354.355.868.532 1.54.532h.504v3.416h-1.624Zm-6.86 68h-1.624v-3.416h.504c.672 0 1.176-.177 1.512-.532.354-.355.532-.868.532-1.54v-4.48c0-.821.112-1.465.336-1.932a2.14 2.14 0 0 1 1.064-1.008c.466-.224 1.073-.373 1.82-.448v.504c-.747-.093-1.354-.243-1.82-.448a2.14 2.14 0 0 1-1.064-1.008c-.224-.467-.336-1.111-.336-1.932v-4.48c0-.672-.178-1.185-.532-1.54-.336-.355-.84-.532-1.512-.532h-.504v-3.416h1.624c1.754 0 3.07.429 3.948 1.288.896.859 1.344 2.1 1.344 3.724v5.068c0 .429.112.756.336.98.224.224.522.336.896.336h.924v3.416h-.924c-.374 0-.672.112-.896.336-.224.205-.336.532-.336.98v5.068c0 1.605-.448 2.837-1.344 3.696-.878.877-2.194 1.316-3.948 1.316ZM5.736 418.477v-3.416h13.328v3.416H5.736Zm0 6.944v-3.416h13.328v3.416H5.736Zm17.76 1.708v-3.5l12.011-4.368v1.96l-12.012-4.368v-3.5l13.328 5.068v3.64l-13.328 5.068ZM86.756 499.691l5.068-11.704h3.5l5.04 11.704h-3.36l-4.396-10.556h1.904l-4.396 10.556h-3.36ZM295.9 651.033v-12.936h3.612v12.936H295.9Zm-4.844-4.76v-3.416h13.328v3.416h-13.328ZM179.874 760.143v-3.5h7.924v3.5h-7.924ZM311.527 41.668V28.732h3.612v12.936h-3.612Zm-4.844-4.76v-3.416h13.328v3.416h-13.328ZM12.4 92.8H8.506l-9.24-26.376H3.16L12.4 92.8ZM119.578 18.672a2.737 2.737 0 0 1-1.932-.756c-.523-.523-.784-1.185-.784-1.988 0-.803.261-1.447.784-1.932a2.737 2.737 0 0 1 1.932-.756c.765 0 1.409.252 1.932.756.522.485.784 1.13.784 1.932 0 .803-.262 1.465-.784 1.988-.523.504-1.167.756-1.932.756Zm0 10.052a2.737 2.737 0 0 1-1.932-.756c-.523-.523-.784-1.185-.784-1.988 0-.803.261-1.447.784-1.932a2.737 2.737 0 0 1 1.932-.756c.765 0 1.409.252 1.932.756.522.485.784 1.13.784 1.932 0 .803-.262 1.465-.784 1.988-.523.504-1.167.756-1.932.756ZM226.088 65.196c0-.653.103-1.232.308-1.736a6 6 0 0 1 .812-1.344c.336-.392.691-.756 1.064-1.092a59.36 59.36 0 0 0 1.036-.952 4.8 4.8 0 0 0 .812-.98c.224-.336.336-.71.336-1.12 0-.672-.28-1.213-.84-1.624-.541-.41-1.269-.616-2.184-.616-.877 0-1.661.187-2.352.56-.69.355-1.26.859-1.708 1.512l-3.388-1.988c.747-1.139 1.783-2.044 3.108-2.716 1.326-.69 2.931-1.036 4.816-1.036 1.4 0 2.632.205 3.696.616 1.064.392 1.895.97 2.492 1.736.616.765.924 1.708.924 2.828 0 .728-.112 1.372-.336 1.932a5.1 5.1 0 0 1-.868 1.456c-.354.41-.737.793-1.148 1.148-.392.355-.765.7-1.12 1.036-.354.336-.653.69-.896 1.064-.224.373-.336.812-.336 1.316h-4.228Zm2.128 7.028c-.784 0-1.428-.252-1.932-.756s-.756-1.101-.756-1.792c0-.71.252-1.297.756-1.764.504-.485 1.148-.728 1.932-.728.803 0 1.447.243 1.932.728.504.467.756 1.055.756 1.764 0 .69-.252 1.288-.756 1.792-.485.504-1.129.756-1.932.756Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h376v846H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function GitHubLogo({
  width = 100,
  height = 100,
  color = '#fff',
  ...props
}: SvgProps) {
  return (
    <Svg
      viewBox="0 0 100 100"
      fill="none"
      width={width}
      height={height}
      {...props}>
      <Path
        d="M48.507 2.627c-25.974 0-47.04 21.062-47.04 47.04 0 20.783 13.477 38.415 32.172 44.636 2.348.435 3.108-1.023 3.108-2.262v-8.757c-13.085 2.846-15.809-5.55-15.809-5.55-2.14-5.438-5.225-6.884-5.225-6.884-4.269-2.92.325-2.858.325-2.858 4.724.33 7.209 4.849 7.209 4.849 4.194 7.19 11.003 5.112 13.688 3.908.42-3.038 1.639-5.115 2.987-6.287-10.446-1.196-21.43-5.23-21.43-23.25 0-5.138 1.838-9.333 4.845-12.626-.486-1.187-2.097-5.973.459-12.45 0 0 3.95-1.261 12.94 4.822 3.75-1.042 7.773-1.564 11.77-1.583 4 .02 8.025.54 11.784 1.583 8.98-6.083 12.924-4.821 12.924-4.821 2.56 6.48.949 11.266.463 12.45 3.018 3.292 4.84 7.49 4.84 12.626 0 18.066-11.002 22.045-21.476 23.21 1.685 1.458 3.226 4.32 3.226 8.71V92.04c0 1.25.752 2.72 3.14 2.258 18.678-6.23 32.139-23.857 32.139-44.633 0-25.977-21.062-47.039-47.04-47.039Z"
        fill="#FF06F4"
      />
      <Path
        d="M51.493 5.614c-25.973 0-47.039 21.062-47.039 47.04 0 20.782 13.477 38.414 32.171 44.635 2.348.435 3.109-1.023 3.109-2.262V86.27c-13.085 2.846-15.81-5.55-15.81-5.55-2.14-5.437-5.225-6.884-5.225-6.884-4.268-2.92.326-2.857.326-2.857 4.723.329 7.209 4.849 7.209 4.849 4.194 7.189 11.003 5.111 13.688 3.908.42-3.038 1.638-5.116 2.987-6.288-10.447-1.195-21.43-5.229-21.43-23.249 0-5.139 1.838-9.333 4.845-12.626-.487-1.188-2.098-5.974.458-12.45 0 0 3.951-1.262 12.94 4.822 3.751-1.043 7.773-1.564 11.771-1.584 3.999.02 8.024.541 11.784 1.584 8.98-6.084 12.924-4.822 12.924-4.822 2.56 6.48.948 11.266.462 12.45 3.019 3.293 4.841 7.491 4.841 12.626 0 18.067-11.003 22.046-21.477 23.21 1.686 1.458 3.226 4.32 3.226 8.71v12.908c0 1.25.753 2.72 3.14 2.258 18.678-6.228 32.14-23.856 32.14-44.632 0-25.977-21.062-47.039-47.04-47.039Z"
        fill="#62F5D4"
      />
      <Path
        d="M50 4.12c-25.973 0-47.039 21.063-47.039 47.04 0 20.783 13.477 38.415 32.17 44.636 2.349.435 3.11-1.023 3.11-2.262v-8.757c-13.085 2.846-15.81-5.55-15.81-5.55-2.14-5.438-5.225-6.884-5.225-6.884-4.269-2.92.325-2.858.325-2.858 4.724.33 7.21 4.85 7.21 4.85 4.194 7.189 11.002 5.11 13.688 3.908.419-3.038 1.638-5.116 2.986-6.288-10.446-1.196-21.43-5.23-21.43-23.25 0-5.138 1.839-9.332 4.845-12.625-.486-1.188-2.097-5.974.459-12.45 0 0 3.951-1.262 12.94 4.822 3.751-1.043 7.773-1.564 11.771-1.584 3.998.02 8.024.541 11.783 1.584 8.98-6.084 12.924-4.822 12.924-4.822 2.56 6.48.949 11.266.463 12.45 3.018 3.293 4.841 7.49 4.841 12.626 0 18.067-11.003 22.045-21.477 23.21 1.685 1.458 3.226 4.32 3.226 8.71v12.908c0 1.25.753 2.72 3.14 2.258 18.678-6.229 32.14-23.857 32.14-44.632C97.04 25.183 75.976 4.12 50 4.12Z"
        fill={color}
      />
    </Svg>
  );
}

export type SvgIconProps = SvgProps & {size?: number};

export function InfoIcon({
  size = 16,
  color = '#007AFF',
  ...props
}: SvgIconProps) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none" {...props}>
      <Path
        d="M3.285 12.713a6.667 6.667 0 1 1 9.43-9.425 6.667 6.667 0 0 1-9.43 9.425ZM3.9 4.01c-.888.886-1.386 2.202-1.51 3.45-.124 1.248.246 2.668.942 3.711.696 1.044 1.816 1.821 3.016 2.186s2.714.276 3.873-.204c1.16-.479 2.195-1.26 2.787-2.367.592-1.106.857-2.94.613-4.171-.244-1.23-.979-2.259-1.948-3.055-.97-.796-2.422-1.23-3.676-1.23-1.436-.001-3.08.667-4.097 1.68Z"
        fill={color}
      />
      <Path
        d="M7.212 7.747v2.794a.787.787 0 0 0 1.571 0V7.747a.787.787 0 0 0-1.571 0ZM7.362 5.05a.777.777 0 0 0-.14.427v-.001a.786.786 0 0 0 .777.797.777.777 0 1 0-.637-1.222Z"
        fill={color}
      />
    </Svg>
  );
}

export function WarningIcon({
  size = 16,
  color = '#B26F1D',
  ...props
}: SvgIconProps) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.166 2.46c.2-.402.53-.727.94-.923 1.013-.486 2.235-.072 2.729.923l4.625 9.321c.136.274.207.575.207.88 0 1.108-.914 2.006-2.041 2.006H3.375c-.31 0-.616-.07-.895-.203a1.99 1.99 0 0 1-.94-2.683l4.626-9.32ZM8 6.642c-.375 0-.68.3-.68.669v2.006c0 .37.305.669.68.669.376 0 .68-.3.68-.669V7.311A.675.675 0 0 0 8 6.642Zm-.68 4.681c0 .37.305.669.68.669.376 0 .68-.3.68-.669a.675.675 0 0 0-.68-.669c-.375 0-.68.3-.68.67Zm.069-8.742a.686.686 0 0 1 1.223 0l4.86 9.966a.66.66 0 0 1 .068.293c0 .37-.304.67-.68.67H3.12a.69.69 0 0 1-.298-.069.664.664 0 0 1-.313-.894l4.88-9.966Z"
        fill={color}
      />
    </Svg>
  );
}

export function ErrorIcon({
  size = 16,
  color = '#E16363',
  ...props
}: SvgIconProps) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none" {...props}>
      <Path
        d="M8 14.667A6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333 6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667ZM8 2.2C4.858 2.201 2.183 4.857 2.183 8c0 3.143 2.675 5.736 5.817 5.736 3.143 0 5.81-2.593 5.81-5.736S11.142 2.201 8 2.201Z"
        fill={color}
      />
      <Path
        d="M10.771 11.33a.482.482 0 0 1-.342-.141L4.887 5.647a.484.484 0 1 1 .684-.684l5.542 5.542a.484.484 0 0 1-.342.825Z"
        fill={color}
      />
      <Path
        d="M5.229 11.33a.483.483 0 0 1-.342-.825l5.542-5.542a.484.484 0 1 1 .684.684L5.57 11.189a.484.484 0 0 1-.342.141Z"
        fill={color}
      />
    </Svg>
  );
}

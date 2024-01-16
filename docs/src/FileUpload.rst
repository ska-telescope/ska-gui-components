FileUpload
~~~~~~~~~~

*Overview*

This is a composite component that will allow for the selection of a local file for upload to a specific URL.

.. figure:: /images/fileUpload.png
   :width: 90%


.. code-block:: sh
   :caption: Example : Default usage

   import { FileUpload } from '@ska-telescope/ska-gui-components';

   ...

   <FileUpload />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "buttonSize", "ButtonSizeTypes", "No", "ButtonSizeTypes.Medium", "Allows for the sizing of the buttons to be changed"
   "chooseColor", "ButtonColorTypes", "No", "secondary", "Allows for the default colour to be overridden"
   "chooseDisabled", "boolean", "No", "false", "Disabled the button"
   "chooseFileTypes", "string", "No", "", "Allows for the component to be limited to specified file types"
   "chooseLabel", "string", "No", "Choose file", "Label for the Choose file button"
   "chooseToolTip", "string", "No", "Select to choose a file for upload", "Tooltip for the Choose file button"
   "chooseVariant", "ButtonVariantTypes", "No", "contained", "Allows for the default variant to be overridden"
   "direction", "String", "No", "row", "Allows the buttons to be displayed vertically if 'column' is set"
   "file", "File", "No", " null", "If provided will be set as the default when entering the component"
   "hideFileName", "boolean", "No", "false", "Allows for the suppression of the selected filename"
   "maxFileWidth", "number", "No", "20", "Allows the display of the selected filename to be truncated"
   "setFile", "Function", "No", "null", "Function called when a file is selected"
   "setStatus", "Function", "No", "null", "Function for setting the status of the upload for local usage"
   "testId", "string", "Yes", "", "Identifier for testing purposes"
   "uploadColor", "ButtonColorTypes", "No", "secondary", "Allows for the default colour to be overridden"
   "uploadDisabled", "boolean", "No", "false", "Disabled the button"
   "uploadFunction", "Function", "No", "null", "Optional function ( see below )"
   "uploadLabel", "string", "No", "Upload file", "Label for the Upload file button"
   "uploadToolTip", "string", "No", "Upload the selected file", "Tooltip for the Upload file button"
   "uploadURL", "string", "No", "https://httpbin.org/post", "URL to which the selected file will be uploaded"
   "uploadVariant", "ButtonVariantTypes", "No", "contained", "Allows for the default variant to be overridden"

.. admonition:: Constants

    FileUploadStatus.   Enumerator to indicate the status of the file upload.

.. admonition:: uploadFunction usage

   Ths component provides a simple upload function that makes use of the uploadURL property to upload the
   selected file. The uploadFunction has been provided so that can be completely replaced.

.. admonition:: Testing Identifier

   Provided by the property *testId*
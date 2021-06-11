// 1. Function to get UUID
import { POST_DATA } from "../../config/Api";
import moment from "moment";

const uuid = (seed = 100) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + seed);

export const fileSizeWithLimit = (size: any) => {
  let fSExt = ["Bytes", "KB", "MB", "GB"],
    i = 0;
  while (size > 900) {
    size /= 1024;
    i++;
  }
  return Math.round(size * 100) / 100 + " " + fSExt[i];
};

export function getDash(count = 1) {
  return "—".repeat(count);
}
export function getSN(rowData: any, items: any) {
  return items && items.length
    ? items.findIndex((data: any) => data._id === rowData._id) + 1
    : null;
}

export const checkStatus = (data: string) => {
  return data?.toLocaleUpperCase() === "PENDING"
    ? "PENDING"
    : data?.toLocaleUpperCase() === "APPROVED"
    ? "APPROVED"
    : data?.toLocaleUpperCase() === "REJECTED"
    ? "REJECTED"
    : data?.toLocaleUpperCase() === "CANCELLED"
    ? "CANCELLED"
    : "";
};
export function postImage(file: any, endpoint: string) {
  const config = {
    headers: {
      "Content-Type": file.type,
      Authorization: `Bearer ${getToken()}`,
    },
  };
  const data = new FormData();
  data.append("media", file);
  return POST_DATA(endpoint, data, config);
}

export const detectKey = () => {
  if (process.env.NODE_ENV !== "production" || getUrl() === "stage-insurance") {
    return "leadway";
  } else {
    return getUrl();
  }
};

export const getToken = () => localStorage.getItem("koboSafe_tk");

const getUrl = () => {
  const url = window.location.host;
  let urlIdx = url.split(".");
  let removed = urlIdx.splice(0, 1);
  return removed[0];
};

function formatNumber(num: string | number) {
  if (num) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return 0;
}

const toastMessage = (manager: any, message: string, type: string) => {
  manager.add(message, {
    appearance: type,
  });
};

function forceDownload(blob: any, filename: any) {
  var a = document.createElement("a");
  a.download = filename;
  a.href = blob;
  // For Firefox https://stackoverflow.com/a/32226068
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Current blob size limit is around 500MB for browsers
function downloadResource(url: any, filename?: string, callback?: any) {
  if (!filename) filename = url.split("\\").pop().split("/").pop();
  fetch(url, {
    headers: new Headers({
      Origin: window.location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      if (callback) {
        callback();
      }
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}

const getCountryCurrency = (key: string) => {
  /* 1 */
  const countries: any = {
    kenya: "KSH",
    nigeria: "NGN",
    uganda: "UGX",
    malawi: "MWK",
    "burkina faso": "XOF",
    ethiopia: "ETB",
    rwanda: "RWF",
    burundi: "BIF",
    niger: "XOF",
    ghana: "GHS",
    egypt: "EGP",
    "dr congo": "CDF",
    "south sudan": "SSP",
    tanzania: "TZS",
    togo: "XOF",
    "ivory coast": "XOF",
    "united arab emirates": "AED",
    liberia: "LRD",
    mali: "CFA",
  };

  return countries[key];
};

const handleSearch = function (searchTerm: any, items: any[]) {
  // Get the search terms from the input field
  if (!searchTerm) return [];
  // Tokenize the search terms and remove empty spaces
  const tokens = searchTerm
    .toLowerCase()
    .split(" ")
    .filter(function (token: any) {
      return token.trim().replace(/[^a-zA-Z ]/g, "") !== "";
    });

  if (tokens.length) {
    const searchTermRegex = new RegExp(tokens.join("|"), "gim");
    if (items && items.length) {
      return items.filter(function (item: any) {
        let itemString = "";
        for (let key in item) {
          if (
            item.hasOwnProperty(key) &&
            item[key] !== "" &&
            item[key] !== null
          ) {
            itemString += item[key].toString().toLowerCase().trim() + " ";
          }
        }
        return itemString.match(searchTermRegex);
      });
    }
  }
};

const getImgPath = (path: string) => {
  return process.env.PUBLIC_URL + path;
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  if (link) {
    link.href = url;
    link.setAttribute("download", `${filename}`);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    if (link && link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }
};

const downloadFile = (
  filename: any,
  path: string,
  userType?: any,
  startDate?: any,
  endDate?: any
) => {
  const token = getToken();

  //build the query params and add & to join them.
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let configUrl = process.env.REACT_APP_URL;

  let url = `${configUrl}${path}`;

  fetch(url, { headers, mode: "cors" })
    .then((res) => res.blob())
    .then((blob) => {
      downloadBlob(blob, filename);
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

const checkExpiry = (date: boolean) => {
  if (date === undefined) {
    return "unavailable";
  }
  if (date) {
    return "expired";
  }

  return "active";
};
const formatDate = (data: string) => moment(data).format("DD-MM-yyyy");

const appendToken = (str: string) => {
  return (str && str + `?token=${getToken()}`) || "";
};

export {
  uuid,
  appendToken,
  formatNumber,
  forceDownload,
  checkExpiry,
  downloadResource,
  formatDate,
  downloadFile,
  getImgPath,
  handleSearch,
  getCountryCurrency,
  toastMessage,
};
